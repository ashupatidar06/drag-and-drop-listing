// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop, DropTargetMonitor } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import "./App.css";

// interface Item {
//   id: string;
//   title: string;
//   listId: string;
// }

// interface ListData {
//   id: string;
//   items: Item[];
// }

// const ItemTypes = {
//   ITEM: "item",
// };

// const DraggableItem: React.FC<{
//   item: Item;
//   listId: string;
//   moveItem: (
//     dragItemId: string,
//     hoverItemId: string,
//     sourceListId: string,
//     destinationListId: string
//   ) => void;
// }> = ({ item, listId, moveItem }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: ItemTypes.ITEM,
//     item: { id: item.id, listId },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: ItemTypes.ITEM,
//     drop: (droppedItem: Item, monitor: DropTargetMonitor) => {
//       if (monitor.didDrop()) {
//         return;
//       }

//       if (listId === droppedItem.listId) {
//         // If dropping in the same list, move the item within the list
//         moveItem(droppedItem.id, item.id, droppedItem.listId, listId);
//       } else {
//         // If dropping in a different list, move the item to the new list
//         moveItem(droppedItem.id, "", droppedItem.listId, listId); // Pass empty hoverItemId
//       }
//     },
//   });

//   const dragRef = React.useRef<HTMLDivElement>(null);
//   drag(drop(dragRef));

//   return (
//     <div
//       ref={dragRef}
//       className={`draggable-item ${isDragging ? "dragging" : ""}`}
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         border: "1px solid black",
//       }}
//     >
//       {item.title}
//     </div>
//   );
// };

// function App() {
//   const initialData: ListData[] = [
//     {
//       id: "INProgress",
//       items: [
//         { id: "0", title: "Non-Movable", listId: "INProgress" },
//         { id: "1", title: "here1", listId: "INProgress" },
//         { id: "2", title: "here2", listId: "INProgress" },
//         { id: "3", title: "here3", listId: "INProgress" },
//         { id: "4", title: "here4", listId: "INProgress" },
//       ],
//     },
//     {
//       id: "Hold",
//       items: [
//         { id: "5", title: "Non-Movable", listId: "Hold" },
//         { id: "6", title: "there1", listId: "Hold" },
//         { id: "7", title: "there2", listId: "Hold" },
//         { id: "8", title: "there3", listId: "Hold" },
//         { id: "9", title: "there4", listId: "Hold" },
//       ],
//     },
//     {
//       id: "Todo",
//       items: [
//         { id: "15", title: "Non-Movable", listId: "Todo" },
//         { id: "16", title: "there1", listId: "Todo" },
//         { id: "17", title: "there2", listId: "Todo" },
//         { id: "18", title: "there3", listId: "Todo" },
//         { id: "19", title: "there4", listId: "Todo" },
//       ],
//     },
//     {
//       id: "Complete",
//       items: [
//         { id: "25", title: "Non-Movable", listId: "Complete" },
//         { id: "26", title: "there1", listId: "Complete" },
//         { id: "27", title: "there2", listId: "Complete" },
//         { id: "28", title: "there3", listId: "Complete" },
//         { id: "29", title: "there4", listId: "Complete" },
//       ],
//     },
//     {
//       id: "open",
//       items: [
//         { id: "35", title: "Non-Movable", listId: "open" },
//         { id: "36", title: "there1", listId: "open" },
//         { id: "37", title: "there2", listId: "open" },
//         { id: "38", title: "there3", listId: "open" },
//         { id: "39", title: "there4", listId: "open" },
//       ],
//     },
//   ];

//   const [lists, setLists] = useState<ListData[]>(initialData);

//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const itemsPerPage = 2; // Change this value based on how many items per page you want

//   // Function to get the items for the current page
//   const getCurrentPageItems = (list: Item[]) => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return list.slice(startIndex, endIndex);
//   };

//   const moveItem = (
//     dragItemId: string,
//     hoverItemId: string,
//     sourceListId: string,
//     destinationListId: string
//   ) => {
//     const updatedLists = [...lists];

//     const sourceListIndex = updatedLists.findIndex(
//       (list) => list.id === sourceListId
//     );
//     const destinationListIndex = updatedLists.findIndex(
//       (list) => list.id === destinationListId
//     );

//     const sourceItemIndex = updatedLists[sourceListIndex].items.findIndex(
//       (item) => item.id === dragItemId
//     );
//     let hoverItemIndex = -1; // Initialize hoverItemIndex as -1

//     // If hoverItemId is not empty, find the index of the hover item
//     if (hoverItemId !== "") {
//       hoverItemIndex = updatedLists[destinationListIndex].items.findIndex(
//         (item) => item.id === hoverItemId
//       );
//     }

//     const [draggedItem] = updatedLists[sourceListIndex].items.splice(
//       sourceItemIndex,
//       1
//     );

//     // Insert the dragged item at the hover index if hoverItemId is not empty
//     if (hoverItemId !== "") {
//       updatedLists[destinationListIndex].items.splice(
//         hoverItemIndex,
//         0,
//         draggedItem
//       );
//     } else {
//       // If hoverItemId is empty, push the dragged item to the end of the list
//       updatedLists[destinationListIndex].items.push(draggedItem);
//     }

//     setLists(updatedLists);
//   };

//   return (
//     <div className="App">
//       <DndProvider backend={HTML5Backend}>
//         <div className="container">
//           {lists.map((list) => (
//             <div className="column" key={list.id}>
//               <h3>List {list.id}</h3>
//               <div className="list-container">
//                 {getCurrentPageItems(list.items).map((item) => (
//                   <DraggableItem
//                     key={item.id}
//                     item={item}
//                     listId={list.id}
//                     moveItem={moveItem}
//                   />
//                 ))}
//                 {list.items.length === 0 && (
//                   <EmptyListDropTarget
//                     listId={list.id}
//                     moveItem={moveItem}
//                     lists={lists}
//                   />
//                 )}
//                 {/* Pagination */}
//                 <div className="pagination">
//                   <button
//                     disabled={currentPage === 1}
//                     onClick={() => setCurrentPage(currentPage - 1)}
//                   >
//                     Prev
//                   </button>
//                   <button
//                     disabled={
//                       currentPage ===
//                       Math.ceil(list.items.length / itemsPerPage)
//                     }
//                     onClick={() => setCurrentPage(currentPage + 1)}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </DndProvider>
//     </div>
//   );
// }

// function EmptyListDropTarget({
//   listId,
//   moveItem,
//   lists,
// }: {
//   listId: string;
//   moveItem: (
//     dragItemId: string,
//     hoverItemId: string,
//     sourceListId: string,
//     destinationListId: string
//   ) => void;
//   lists: ListData[];
// }) {
//   const [, drop] = useDrop({
//     accept: ItemTypes.ITEM,
//     drop: (droppedItem: Item) => {
//       const dragListId = droppedItem.listId;
//       moveItem(droppedItem.id, "", dragListId, listId); // Pass empty hoverItemId
//     },
//   });

//   return (
//     <div className="empty-list" ref={drop}>
//       Drop Here
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import {
  DndProvider,
  useDrag,
  useDrop,
  DropTargetMonitor,
} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
interface Item {
  id: string;
  title: string;
  listId: string;
}
interface ListData {
  id: string;
  items: Item[];
}
const ItemTypes = {
  ITEM: "item",
};
const DraggableItem: React.FC<{
  item: Item;
  listId: string;
  moveItem: (
    dragItemId: string,
    hoverItemId: string,
    sourceListId: string,
    destinationListId: string
  ) => void;
}> = ({ item, listId, moveItem }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ITEM,
    item: { id: item.id, listId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: (droppedItem: Item, monitor: DropTargetMonitor) => {
      if (monitor.didDrop()) {
        return;
      }
      if (listId === droppedItem.listId) {
        // If dropping in the same list, move the item within the list
        moveItem(droppedItem.id, item.id, droppedItem.listId, listId);
      } else {
        // If dropping in a different list, move the item to the new list
        moveItem(droppedItem.id, "", droppedItem.listId, listId); // Pass empty hoverItemId
      }
    },
  });
  const dragRef = React.useRef<HTMLDivElement>(null);
  drag(drop(dragRef));
  return (
    <div
      ref={dragRef}
      className={`draggable-item  ${isDragging ? "dragging" : ""}`}
      style={{
        opacity: 1,
        border: "1px solid black",
      }}
    >
      {item.title}
    </div>
  );
};
function App() {
  const initialData: ListData[] = [
    {
      id: "INProgress",
      items: [
        { id: "0", title: "Non-Movable", listId: "INProgress" },
        { id: "1", title: "here1", listId: "INProgress" },
        { id: "2", title: "here2", listId: "INProgress" },
        { id: "3", title: "here3", listId: "INProgress" },
        { id: "4", title: "here4", listId: "INProgress" },
      ],
    },
    {
      id: "Hold",
      items: [
        { id: "5", title: "Non-Movable", listId: "Hold" },
        { id: "6", title: "there1", listId: "Hold" },
        { id: "7", title: "there2", listId: "Hold" },
        { id: "8", title: "there3", listId: "Hold" },
        { id: "9", title: "there4", listId: "Hold" },
      ],
    },
    {
      id: "Todo",
      items: [
        { id: "15", title: "Non-Movable", listId: "Todo" },
        { id: "16", title: "there1", listId: "Todo" },
        { id: "17", title: "there2", listId: "Todo" },
        { id: "18", title: "there3", listId: "Todo" },
        { id: "19", title: "there4", listId: "Todo" },
      ],
    },
    {
      id: "Complete",
      items: [
        { id: "25", title: "Non-Movable", listId: "Complete" },
        { id: "26", title: "there1", listId: "Complete" },
        { id: "27", title: "there2", listId: "Complete" },
        { id: "28", title: "there3", listId: "Complete" },
        { id: "29", title: "there4", listId: "Complete" },
      ],
    },
    {
      id: "open",
      items: [
        { id: "35", title: "Non-Movable", listId: "open" },
        { id: "36", title: "there1", listId: "open" },
        { id: "37", title: "there2", listId: "open" },
        { id: "38", title: "there3", listId: "open" },
        { id: "39", title: "there4", listId: "open" },
      ],
    },
  ];
  const [lists, setLists] = useState<ListData[]>(initialData);
  const moveItem = (
    dragItemId: string,
    hoverItemId: string,
    sourceListId: string,
    destinationListId: string
  ) => {
    const updatedLists = [...lists];
    const sourceListIndex = updatedLists.findIndex(
      (list) => list.id === sourceListId
    );
    const destinationListIndex = updatedLists.findIndex(
      (list) => list.id === destinationListId
    );
    const sourceItemIndex = updatedLists[sourceListIndex].items.findIndex(
      (item) => item.id === dragItemId
    );
    let hoverItemIndex = -1; // Initialize hoverItemIndex as -1
    // If hoverItemId is not empty, find the index of the hover item
    if (hoverItemId !== "") {
      hoverItemIndex = updatedLists[destinationListIndex].items.findIndex(
        (item) => item.id === hoverItemId
      );
    }
    const [draggedItem] = updatedLists[sourceListIndex].items.splice(
      sourceItemIndex,
      1
    );
    // Insert the dragged item at the hover index if hoverItemId is not empty
    if (hoverItemId !== "") {
      updatedLists[destinationListIndex].items.splice(
        hoverItemIndex,
        0,
        draggedItem
      );
    } else {
      // If hoverItemId is empty, push the dragged item to the end of the list
      updatedLists[destinationListIndex].items.push(draggedItem);
    }
    setLists(updatedLists);
  };
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div className="container">
          {lists.map((list) => (
            <div className="column" key={list.id}>
              <h3>List {list.id}</h3>
              <div className="list-container">
                {list.items.map((item) => (
                  <DraggableItem
                    key={item.id}
                    item={item}
                    listId={list.id}
                    moveItem={moveItem}
                  />
                ))}
                {list.items.length === 0 && (
                    <EmptyListDropTarget
                      listId={list.id}
                      moveItem={moveItem}
                      lists={lists}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </DndProvider>
      </div>
    );
  }
  function EmptyListDropTarget({
    listId,
    moveItem,
    lists,
  }: {
    listId: string;
    moveItem: (
      dragItemId: string,
      hoverItemId: string,
      sourceListId: string,
      destinationListId: string
    ) => void;
    lists: ListData[];
  }) {
    const [, drop] = useDrop({
      accept: ItemTypes.ITEM,
      drop: (droppedItem: Item) => {
        const dragListId = droppedItem.listId;
        moveItem(droppedItem.id, "", dragListId, listId); // Pass empty hoverItemId
      },
    });
    return (
      <div
        className="empty-list"
        ref={drop}
        style={{ border: "1px dashed gray" }}
      >
        Drop Here
      </div>
    );
  }
  export default App;
