import React from "react";
import CoursesComponent from "../../features/main/components/Courses";
import { Typography } from "antd";

const { Title } = Typography;

export default function Courses() {
  return (
    <div>
      <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
        <Title level={2}>Courses</Title>
      </div>
      <CoursesComponent />
    </div>
  );
}
