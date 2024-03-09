"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface TeamCardProps {
  name: string, 
  position: string, 
  imageSrc: string, 
  description: string
}

export const TeamCard = ({ 
  name, 
  position, 
  imageSrc, 
  description 
}: TeamCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModel = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4 mx-1 mb-2" onClick={toggleModel}>
        <img src={imageSrc} alt={name} className="w-25 h-24 rounded-sm mx-auto mb-4" />
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-orange-800">{position}</p>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-orange-200 bg-opacity-80">
          <div className="bg-white p-4 rounded-3xl text-center">
            <img src={imageSrc} alt={name} className=" border-black border-4 w-25 h-26 rounded-3xl mx-auto mb-4" />
            <p className="text-gray-700 md:text-lg text-sm">{description}</p>
            <Button 
              onClick={toggleModel}
              size="lg"
              variant="ghost"
              className="border-2 border-black hover:bg-orange-200 py-2 md:py-3 px-4 md:px-6 rounded-md text-md md:text-3xl"
            >
              <div>
                Close
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
