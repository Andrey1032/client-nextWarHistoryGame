"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
    const { topic_id } = useParams();
    return <div>TopicId {topic_id}</div>;
}
