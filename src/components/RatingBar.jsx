import PropTypes from "prop-types";


const RatingBar=({rate})=>{
    const TotalStars=10;
    const FilledStars=Array(rate).fill("★");
    const EmptyStars=Array(TotalStars-rate).fill("☆")

    return(
        <div className="rating-bar">
            {FilledStars.concat(EmptyStars).map((star,index)=>(
                <span key={index} style={{fontSize:'20px'}}>{star}</span>
            ))}
        </div>
    )
}
RatingBar.propTypes={
    rate:PropTypes.number.isRequired
}
export default RatingBar