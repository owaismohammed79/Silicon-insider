import './../CSS files/ImageResizer.css';
import PropTypes from 'prop-types';

function ImageResizer({ src, alt, width, height }) {
  return (
    <div className="image-container" style={{ width: `${width}px`, height: `${height}px` }}>
      <img src={src} alt={alt} className="responsive-image" />
    </div>
  );
}

ImageResizer.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

export default ImageResizer;
