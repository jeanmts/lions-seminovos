import React from 'react';

interface GoogleMapProps {
  width?: string;
  height?: string;
  title?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ width = "800px", height = "200px", title = "Mapa da Loja" }) => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58879.11251095571!2d-43.45195402516332!3d-22.730302962027118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLions%20Seminovos!5e0!3m2!1spt-BR!2sbr!4v1727810427318!5m2!1spt-BR!2sbr"
        width={width}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        title={title}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export {GoogleMap};
