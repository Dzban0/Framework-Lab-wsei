import PropTypes from 'prop-types';

const RatingBar = ({ rate }) => {
    const totalStars = 10;
    const filledStars = Array(rate).fill("★");
    const emptyStars = Array(totalStars - rate).fill("☆");

    return (
        <div className="rating-bar">
            {filledStars.concat(emptyStars).map((star, index) => (
                <span key={index} style={{ fontSize: '20px' }}>{star}</span>
            ))}
        </div>
    );
};

RatingBar.propTypes = {
    rate: PropTypes.number.isRequired,
};

export default RatingBar;
