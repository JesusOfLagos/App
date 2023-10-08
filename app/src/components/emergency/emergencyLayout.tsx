import React from "react";
import EmergencyForm from "./emergencyForm";
import EmergencyPage from "./emergencyPage";
import EmergencyTestimonial from "./emergencyTestimonial";
import EmergencyInfo from "./emergencyInfo";

interface MidPageProps {}

const EmergencyLayout: React.FC = ({ }) => {
  return (
    <div className="flexnh-screen">
        <EmergencyPage />
        <EmergencyTestimonial />
        <EmergencyForm />
        {/* <EmergencyInfo /> */}
      </div>
  );
}

export default EmergencyLayout