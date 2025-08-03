import React from "react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-gray-100 rounded-lg">{icon}</div>
      </div>
      <h3 className="text-center text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-center text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
