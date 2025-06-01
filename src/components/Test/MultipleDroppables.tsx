import { useDroppable } from "@dnd-kit/core";
import React from "react";

export function Droppable(props: {
    id: string | number;
    children: React.ReactNode;
}) {
    const { setNodeRef } = useDroppable({
        id: props.id,
    });

    return <div ref={setNodeRef}>{props.children}</div>;
}

export function MultipleDroppables() {
    const droppables = ["1", "2", "3", "4"];

    return (
        <section>
            {droppables.map((id) => (
                <Droppable id={id} key={id}>
                    Droppable container id: ${id}
                </Droppable>
            ))}
        </section>
    );
}
