import React, { useState } from 'react';

const HSec8_2 = ({img,vid}) => {
  const [isOpen, setIsOpen] = useState(false);
  const googleDriveVideoEmbedUrl = `${vid}`; 

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img
        src={`${img}`}
        alt="Video Thumbnail"
        className="cursor-pointer w-auto h-auto" // Tailwind classes for width and height, and cursor
        onClick={openPopup}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center" // Tailwind for fixed, inset, background, z-index, flex for centering
          onClick={closePopup} // Close when clicking on the overlay
        >
          <div
            className="relative bg-white p-1 rounded-md max-w-lg w-11/12 mx-auto" // Tailwind for relative, background, padding, border-radius, max-width, width, margin auto
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
          >
            <span
              className="absolute top-0 right-2 z-50 text-white text-3xl cursor-pointer" // Tailwind for absolute, positioning, text color, text size, cursor
              onClick={closePopup}
            >
              &times;
            </span>

            <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe
                src={`https://www.youtube.com/embed/${vid}`}
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HSec8_2;