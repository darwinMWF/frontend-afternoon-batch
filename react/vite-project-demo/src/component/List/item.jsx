function Item({ data, isDone }) {
  // way number 1
  //   if (isDone) {
  //     return (
  //       <li>
  //         {data}
  //         <input type="checkbox" checked />
  //       </li>
  //     );
  //   }
  //   return <li>{data}</li>;

  // way number 2

  //   return (
  //     <>
  //       {isDone ? (
  //         <li>
  //           {data}
  //           <input type="checkbox" checked />
  //         </li>
  //       ) : (
  //         <li>{data}</li>
  //       )}
  //     </>
  //   );

  // way number 3
  {/* {isDone && (
        <li>
          {data} <input type="checkbox" checked />
        </li>
      )} */}

  return (
    <>
       {isDone ? (
          <li>
            {data}
            <input type="checkbox" defaultChecked />
          </li>
        ) : (
          <li>{data}</li>
        )}
    </>
  );
}

export default Item;
