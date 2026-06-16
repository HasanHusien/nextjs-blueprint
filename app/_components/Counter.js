"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {users && <p>there are {users.length} users</p>}

      <button onClick={() => setCount((e) => e + 1)}>increase {count}</button>
    </div>
  );
}
