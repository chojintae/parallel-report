import React, { Component } from "react";
import "./Top_stories_style.css";

import SN_11Img from "./articles/SN11/img/SN11_1.png"
import SN_11Article from "./articles/SN11/text/SN11.json"
import SN_12Img from "./articles/SN12/img/SN12_1.png"
import SN_12Article from "./articles/SN12/text/SN12.json"
import SN_13Img from "./articles/SN13/img/SN13_1.png"
import SN_13Article from "./articles/SN13/text/SN13.json"

import SN_14Article from "./articles/SN14/text/SN14.json"
import SN_15Article from "./articles/SN15/text/SN15.json"
import SN_16Article from "./articles/SN16/text/SN16.json"
import SN_17Article from "./articles/SN17/text/SN17.json"
import SN_18Article from "./articles/SN18/text/SN18.json"
import SN_19Article from "./articles/SN19/text/SN19.json"
import SN_20Article from "./articles/SN20/text/SN20.json"
import SN_21Article from "./articles/SN21/text/SN21.json"

type Top_storiesProps = {
    
};

type Top_storiesState = {


}

export class Top_stories extends Component<Top_storiesProps, Top_storiesState> {
    constructor(props: any) {
        super(props);
        this.state= {

        }
    }

    render = (): JSX.Element => {

        return (
            <div className="top_stories">
                <div className="side_bar_top_stories"> 
                    <p className="side_bar_title"><b>Top Stories</b></p>
                    <p className="side_bar_options">Sign up for the daily news letters</p>
                </div>
                <div className="articles_area_top_stories">
                    <div className="areaA_and_B_container_top_stories">
                        <div className="areaA_top_stories">
                            <div className="areaA_text_top_stories">
                                <p className="category_top_stories"><b>{SN_11Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_11Article.Subtitle}</b></p>
                            </div>
                            <div className="areaA_image_top_stories">
                                <img className='image_top_stories'src={SN_11Img} alt="Article Image"/>
                            </div>
                        </div>

                        <div className="areaB_top_stories">
                            <div className="areaB_text_top_stories">
                                <p className="category_top_stories"><b>{SN_12Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_12Article.Subtitle}</b></p>
                            </div>
                            <div className="areaB_image_top_stories">
                                <img className='image_top_stories'src={SN_12Img} alt="Article Image"/>
                            </div>
                        </div>
                    </div>

                    <div className="areaC_D_and_E_container_top_stories">
                        <div className="areaC_top_stories">
                            <div className="areaC_text_top_stories">
                                <p className="category_top_stories"><b>{SN_13Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_13Article.Subtitle}</b></p>
                            </div>
                            <div className="areaC_image_top_stories">
                                <img className='image_top_stories'src={SN_13Img} alt="Article Image"/>
                            </div>
                        </div>

                        <div className="areaD_top_stories">
                            <div className="areaD_1_top_stories">
                                <p className="category_top_stories"><b>{SN_14Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_14Article.Subtitle}</b></p>
                            </div>
                            <div className="areaD_2_top_stories">
                                <p className="category_top_stories"><b>{SN_15Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_15Article.Subtitle}</b></p>
                            </div>
                            <div className="areaD_3_top_stories">
                                <p className="category_top_stories"><b>{SN_16Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_16Article.Subtitle}</b></p>
                            </div>
                        </div>

                        <div className="areaE_top_stories">
                            <div className="areaE_1_top_stories">
                                <p className="category_top_stories"><b>{SN_17Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_17Article.Subtitle}</b></p>
                            </div>
                            <div className="areaE_2_top_stories">
                                <p className="category_top_stories"><b>{SN_18Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_18Article.Subtitle}</b></p>
                            </div>
                            <div className="areaE_3_top_stories">
                                <p className="category_top_stories"><b>{SN_19Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_19Article.Subtitle}</b></p>
                            </div>
                            <div className="areaE_4_top_stories">
                                <p className="category_top_stories"><b>{SN_20Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_20Article.Subtitle}</b></p>
                            </div>
                            <div className="areaE_5_top_stories">
                                <p className="category_top_stories"><b>{SN_21Article.Category}</b></p>
                                <p className="subtitle_top_stories"><b>{SN_21Article.Subtitle}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}