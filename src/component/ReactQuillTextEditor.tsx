import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

interface ReactQuillTextEditorProps {}

const ReactQuillTextEditor: React.FC<ReactQuillTextEditorProps> = () => {
  const [editorHtml, setEditorHtml] = useState<string>("");
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();

      quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
        const isImage =
          node.tagName &&
          node.tagName.toLowerCase() === 'img' &&
          node.hasAttribute('src');

        if (isImage) {
          const imageUrl = node.getAttribute('src') || '';
          if (imageUrl) {
            handleImageCopy(imageUrl);
          }
          return (Quill as any).import('delta').create(); // Create a new Delta instance
        }

        return delta;
      });
    }
  }, []);

  const handleImageUpload = async (file: File) => {
    try {
      const imageUrl = await uploadImage(file);
      insertImage(imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageCopy = async (imageUrl: string) => {
    try {
      const blob = await fetch(imageUrl).then((response) => response.blob());
      const file = new File([blob], "pasted-image.png", { type: "image/png" });
      await handleImageUpload(file);
    } catch (error) {
      console.error("Error handling copied image:", error);
    }
  };

  const insertImage = (imageUrl: string) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const range = quill.getSelection();
      quill.insertEmbed(range?.index || 0, "image", imageUrl, "user");
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append("bucketName", "CODIOTIC-CONNECT");
      formData.append("file", file, file?.name);

      const response = await axios.post(
        "https://fm-api.codioticdemo.com/upload",
        formData
      );
      return `https://fm-api.codioticdemo.com/${response?.data?.file_path}`;
    } catch (error) {
      throw new Error("Error uploading image");
    }
  };

  const modules = {
    clipboard: {
      matchers: [["img", (node: any) => ({ image: node.src })]],
    },
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: () => {
          const input: any = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");
          input.click();

          input.onchange = async () => {
            const file = input.files ? input.files[0] : null;
            if (file) {
              await handleImageUpload(file);
            }
          };
        },
      },
    },
  };

  const handleChange = (
    content: string,
    delta: any,
    source: string,
    editor: any
  ) => {
    console.log("Content change", content, delta, source, editor);
  };

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      value={editorHtml}
      onChange={handleChange}
      modules={modules}
    />
  );
};

export default ReactQuillTextEditor;
