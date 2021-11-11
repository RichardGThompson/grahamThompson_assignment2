import PropTypes from "prop-types";

export const SliderItem = (props) => {
    return(
        <div className="slider-item">
            <div className="title-card-container ltr-0">
                <div className="title-card">
                    <a href="#" className="slider-refocus">
                        <div className="boxart-size-16x9 boxart-container boxart-rounded">
                            <img src={props.titleImgUrl} alt="Poster" className="boxart-image boxart-image-in-padded-container" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

SliderItem.propTypes = {
    titleName: PropTypes.string.isRequired,
    titleImgUrl: PropTypes.string.isRequired
}

SliderItem.defaultProps = {
    titleName: "",
    titleImgUrl: ""
}