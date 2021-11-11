import PropTypes from "prop-types";
import { SliderItem } from "./slider-item";

export const Row = (props) => {
    return(
        <div className="lolomoRow lolomoRow_title_card">
            <h2 className="rowTitle">{props.rowTitle}</h2>
            <div id="row-1" className="rowContainer rowContainer_title_card">
                <div className="rowContent slider-hover-trigger-layer">
                    <div className="slider">
                        <div className="sliderMask showPeek">
                            <div className="sliderContent row-with-x-columns">
                                {props.rowItems.map( (item) => <SliderItem titleName={item.itemName} titleImgUrl={item.imageUrl}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Row.propTypes = {
    rowTitle: PropTypes.string.isRequired,
    rowItems: PropTypes.array.isRequired
}

Row.defaultProps = {
    rowTitle: "",
    rowItems: []
}