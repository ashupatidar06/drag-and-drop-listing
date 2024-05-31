import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// // // import React, { useState } from "react";
// // // import ReactDragListView from "react-drag-listview";
// // // import "./App.css";

// // // function App() {
// // //   const initialData1 = [
// // //     { title: "here1" },
// // //     { title: "here2" },
// // //     { title: "here3" },
// // //     { title: "here4" },
// // //   ];

// // //   const initialData2 = [
// // //     { title: "there1" },
// // //     { title: "there2" },
// // //     { title: "there3" },
// // //     { title: "there4" },
// // //   ];

// // //   const [data1, setData1] = useState(initialData1);
// // //   const [data2, setData2] = useState(initialData2);

// // //   const dragProps1 = {
// // //     onDragEnd(fromIndex:number, toIndex:number) {
// // //       const newData = [...data1];
// // //       const [removed] = newData.splice(fromIndex, 1);
// // //       newData.splice(toIndex, 0, removed);
// // //       setData1(newData);
// // //     },
// // //     nodeSelector: "li",
// // //     handleSelector: "a",
// // //   };

// // //   const dragProps2 = {
// // //     onDragEnd(fromIndex:number, toIndex:number) {
// // //       const newData = [...data2];
// // //       const [removed] = newData.splice(fromIndex, 1);
// // //       newData.splice(toIndex, 0, removed);
// // //       setData2(newData);
// // //     },
// // //     nodeSelector: "li",
// // //     handleSelector: "a",
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <div className="container">
// // //         <div className="column">
// // //           <ReactDragListView {...dragProps1}>
// // //             <ol>
// // //               {data1.map((item, index) => (
// // //                 <li key={index} className="draggable-item">
// // //                   {item.title}
// // //                   <a href="#">Drag</a>
// // //                 </li>
// // //               ))}
// // //             </ol>
// // //           </ReactDragListView>
// // //         </div>
// // //         <div className="column">
// // //           <ReactDragListView {...dragProps2}>
// // //             <ol>
// // //               {data2.map((item, index) => (
// // //                 <li key={index} className="draggable-item">
// // //                   {item.title}
// // //                   <a href="#">Drag</a>
// // //                 </li>
// // //               ))}
// // //             </ol>
// // //           </ReactDragListView>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // import React, { useState } from "react";
// // import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// // import "./App.css";

// // function App() {
// //   const initialData1 = [
// //     { id: "1", title: "here1" },
// //     { id: "2", title: "here2" },
// //     { id: "3", title: "here3" },
// //     { id: "4", title: "here4" },
// //   ];

// //   const initialData2 = [
// //     { id: "5", title: "there1" },
// //     { id: "6", title: "there2" },
// //     { id: "7", title: "there3" },
// //     { id: "8", title: "there4" },
// //   ];

// //   const [data1, setData1] = useState(initialData1);
// //   const [data2, setData2] = useState(initialData2);

// //   const onDragEnd = (result) => {
// //     const { source, destination } = result;
// //     if (!destination) return;

// //     if (source.droppableId === destination.droppableId) {
// //       const list = source.droppableId === "list1" ? data1 : data2;
// //       const newData = [...list];
// //       const [removed] = newData.splice(source.index, 1);
// //       newData.splice(destination.index, 0, removed);

// //       if (source.droppableId === "list1") {
// //         setData1(newData);
// //       } else {
// //         setData2(newData);
// //       }
// //     } else {
// //       const sourceList = source.droppableId === "list1" ? data1 : data2;
// //       const destinationList = destination.droppableId === "list1" ? data1 : data2;

// //       const sourceData = [...sourceList];
// //       const destinationData = [...destinationList];

// //       const [removed] = sourceData.splice(source.index, 1);
// //       destinationData.splice(destination.index, 0, removed);

// //       setData1(source.droppableId === "list1" ? sourceData : destinationData);
// //       setData2(destination.droppableId === "list2" ? destinationData : sourceData);
// //     }
// //   };

// //   return (
// //     <div className="App">
// //       <DragDropContext onDragEnd={onDragEnd}>
// //         <div className="container">
// //           <Droppable droppableId="list1">
// //             {(provided) => (
// //               <div ref={provided.innerRef} className="column">
// //                 <h3>List 1</h3>
// //                 {data1.map((item, index) => (
// //                   <Draggable key={item.id} draggableId={item.id} index={index}>
// //                     {(provided) => (
// //                       <div
// //                         ref={provided.innerRef}
// //                         {...provided.draggableProps}
// //                         {...provided.dragHandleProps}
// //                         className="draggable-item"
// //                       >
// //                         {item.title}
// //                       </div>
// //                     )}
// //                   </Draggable>
// //                 ))}
// //                 {provided.placeholder}
// //               </div>
// //             )}
// //           </Droppable>
// //           <Droppable droppableId="list2">
// //             {(provided) => (
// //               <div ref={provided.innerRef} className="column">
// //                 <h3>List 2</h3>
// //                 {data2.map((item, index) => (
// //                   <Draggable key={item.id} draggableId={item.id} index={index}>
// //                     {(provided) => (
// //                       <div
// //                         ref={provided.innerRef}
// //                         {...provided.draggableProps}
// //                         {...provided.dragHandleProps}
// //                         className="draggable-item"
// //                       >
// //                         {item.title}
// //                       </div>
// //                     )}
// //                   </Draggable>
// //                 ))}
// //                 {provided.placeholder}
// //               </div>
// //             )}
// //           </Droppable>
// //         </div>
// //       </DragDropContext>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
// import "./App.css";

// interface Item {
//   id: string;
//   title: string;
// }

// function App() {
//   const initialData1: Item[] = [
//     { id: "1", title: "here1" },
//     { id: "2", title: "here2" },
//     { id: "3", title: "here3" },
//     { id: "4", title: "here4" },
//   ];

//   const initialData2: Item[] = [
//     { id: "5", title: "there1" },
//     { id: "6", title: "there2" },
//     { id: "7", title: "there3" },
//     { id: "8", title: "there4" },
//   ];

//   const [data1, setData1] = useState<Item[]>(initialData1);
//   const [data2, setData2] = useState<Item[]>(initialData2);

//   const onDragEnd = (result: DropResult) => {
//     const { source, destination } = result;
//     if (!destination) return;

//     if (source.droppableId === destination.droppableId) {
//       const list = source.droppableId === "list1" ? data1 : data2;
//       const newData = [...list];
//       const [removed] = newData.splice(source.index, 1);
//       newData.splice(destination.index, 0, removed);

//       if (source.droppableId === "list1") {
//         setData1(newData);
//       } else {
//         setData2(newData);
//       }
//     } else {
//       const sourceList = source.droppableId === "list1" ? data1 : data2;
//       const destinationList = destination.droppableId === "list1" ? data1 : data2;

//       const sourceData = [...sourceList];
//       const destinationData = [...destinationList];

//       const [removed] = sourceData.splice(source.index, 1);
//       destinationData.splice(destination.index, 0, removed);

//       setData1(source.droppableId === "list1" ? sourceData : destinationData);
//       setData2(destination.droppableId === "list2" ? destinationData : sourceData);
//     }
//   };

//   return (
//     <div className="App">
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="container">
//           <Droppable droppableId="list1">
//             {(provided) => (
//               <div ref={provided.innerRef} className="column">
//                 <h3>List 1</h3>
//                 {data1.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className="draggable-item"
//                       >
//                         {item.title}
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//           <Droppable droppableId="list2">
//             {(provided) => (
//               <div ref={provided.innerRef} className="column">
//                 <h3>List 2</h3>
//                 {data2.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className="draggable-item"
//                       >
//                         {item.title}
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </DragDropContext>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
//   DraggableProvided,
//   DroppableProvided,
// } from "react-beautiful-dnd";
// import "./App.css";
// import "@atlaskit/css-reset"; // Import react-beautiful-dnd styles

// interface Item {
//   id: string;
//   title: string;
// }

// function App() {
//   const initialData1: Item[] = [
//     { id: "list1-1", title: "here1" },
//     { id: "list1-2", title: "here2" },
//     { id: "list1-3", title: "here3" },
//     { id: "list1-4", title: "here4" },
//   ];

//   const initialData2: Item[] = [
//     { id: "list2-1", title: "there1" },
//     { id: "list2-2", title: "there2" },
//     { id: "list2-3", title: "there3" },
//     { id: "list2-4", title: "there4" },
//   ];

//   const [data1, setData1] = useState<Item[]>(initialData1);
//   const [data2, setData2] = useState<Item[]>(initialData2);

//   const onDragEnd = (result: DropResult) => {
//     console.log("herr");
//     const { source, destination } = result;

//     if (!destination) return; // dropped outside the list

//     const sourceList = source.droppableId === "list1" ? data1 : data2;
//     const destinationList = destination.droppableId === "list1" ? data1 : data2;

//     // If dropped in the same list
//     if (source.droppableId === destination.droppableId) {
//       const newList = [...sourceList];
//       const [removed] = newList.splice(source.index, 1);
//       newList.splice(destination.index, 0, removed);

//       if (source.droppableId === "list1") {
//         setData1(newList);
//       } else {
//         setData2(newList);
//       }
//     } else {
//       // If dropped in a different list
//       const sourceData = [...sourceList];
//       const destinationData = [...destinationList];

//       const [draggedItem] = sourceData.splice(source.index, 1);
//       destinationData.splice(destination.index, 0, draggedItem);

//       setData1(source.droppableId === "list1" ? sourceData : destinationData);
//       setData2(
//         destination.droppableId === "list1" ? destinationData : sourceData
//       );
//     }
//   };
//   return (
//     <div className="App">
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="container">
//         <Droppable droppableId="list1">
//   {(provided: DroppableProvided) => (
//     <div ref={provided.innerRef} className="column">
//       <h3>List 1</h3>
//       {data1.map((item, index) => (
//         <Draggable key={item.id} draggableId={item.id} index={index}>
//           {(provided: DraggableProvided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.draggableProps}
//               {...provided.dragHandleProps}
//               className="draggable-item"
//             >
//               {item.title}
//             </div>
//           )}
//         </Draggable>
//       ))}
//       {provided.placeholder}
//     </div>
//   )}
// </Droppable>
// <Droppable droppableId="list2">
//   {(provided: DroppableProvided) => (
//     <div ref={provided.innerRef} className="column">
//       <h3>List 2</h3>
//       {data2.map((item, index) => (
//         <Draggable key={item.id} draggableId={item.id} index={index}>
//           {(provided: DraggableProvided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.draggableProps}
//               {...provided.dragHandleProps}
//               className="draggable-item"
//             >
//               {item.title}
//             </div>
//           )}
//         </Draggable>
//       ))}
//       {provided.placeholder}
//     </div>
//   )}
// </Droppable>
//         </div>
//       </DragDropContext>
//     </div>
//   );
// }

// export default App;
