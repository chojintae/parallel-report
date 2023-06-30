import React, { Component } from "react";
import "./Parallel_section_style.css";
import SN_1Img from "./articles/SN1/img/SN1_1.png"
import SN_1Article from "./articles/SN1/text/SN1.json"
import SN_3Img from "./articles/SN3/img/SN3_1.png"
import SN_3Article from "./articles/SN3/text/SN3.json"
import SN_5Article from "./articles/SN5/text/SN5.json"
import SN_7Article from "./articles/SN7/text/SN7.json"
import SN_9Article from "./articles/SN9/text/SN9.json"

type Parallel_sectionProps = {
    
};

type Parallel_sectionState = {
    latest_SNs: number[]
}

export class Parallel_section extends Component<Parallel_sectionProps, Parallel_sectionState> {
    constructor(props: any) {
        super(props);
        this.state= {
            latest_SNs: [1,2,3,4,5,6,7,8,9,10],
        }
    }

    render = (): JSX.Element => {
        return (
            <div className="parallel_section">
                <div className="section_name_parallel_section">
                    <p><b>Parallel Section</b></p>
                </div>

                <div className="split_container_parallel_section">
                    <div className="split_left_parallel_section"> 
                        <div className="areaA_parallel_section">
                            <div className="areaA_text_parallel_section">
                                <p className="title_parallel_section"><b>{SN_1Article.Title}</b></p>
                                <p className="subtitle_parallel_section"><b>{SN_1Article.Subtitle}</b></p>
                            </div>
                            <div className="areaA_image_parallel_section">
                                <img className='image_parallel_section'src={SN_1Img} alt="Article Image"/>
                            </div>
                        </div>
                        <div className="areaB_and_C_container_parallel_section"> 
                            <div className="areaB_parallel_section"> 
                                <div className='areaB_image_parallel_section'>
                                    <img className='image_parallel_section'src={SN_3Img} alt="Article Image" />
                                </div>
                                <div className="areaB_text_parallel_section">
                                    <p className="category_parallel_section"><b>{SN_5Article.Category}</b></p>
                                    <p className="title_parallel_section"><b>{SN_3Article.Title}</b></p>
                                </div>
                            </div>
                            <div className="areaC_parallel_section">
                                <div className="areaC_1_parallel_section">
                                    <p className="category_parallel_section"><b>{SN_5Article.Category}</b></p>
                                    <p className="subtitle_parallel_section"><b>{SN_5Article.Subtitle}</b></p>
                                </div>
                                <div className="areaC_2_parallel_section">
                                    <p className="category_parallel_section"><b>{SN_7Article.Category}</b></p>
                                    <p className="subtitle_parallel_section"><b>{SN_7Article.Subtitle}</b></p>
                                </div>
                                <div className="areaC_3_parallel_section">
                                    <p className="category_parallel_section"><b>{SN_9Article.Category}</b></p>
                                    <p className="subtitle_parallel_section"><b>{SN_9Article.Subtitle}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="split_right_parallel_section">
                    <div className="areaA_parallel_section">
                            <div className="areaA_text_parallel_section">
                                <p className="title_parallel_section"><b>{SN_1Article.Title}</b></p>
                                <p className="subtitle_parallel_section"><b>{SN_1Article.Subtitle}</b></p>
                            </div>
                            <div className="areaA_image_parallel_section">
                                <img className='image_parallel_section'src={SN_1Img} alt="Article Image"/>
                            </div>
                        </div>
                        <div className="areaB_and_C_container_parallel_section"> 
                            <div className="areaB_parallel_section"> 
                                <div className='areaB_image_parallel_section'>
                                    <img className='image_parallel_section'src={SN_3Img} alt="Article Image" />
                                </div>
                                <div className="areaB_text_parallel_section">
                                    <p className="category_parallel_section"><b>{SN_5Article.Category}</b></p>
                                    <p className="title_parallel_section"><b>{SN_3Article.Title}</b></p>
                                </div>
                            </div>
                            <div className="areaC_parallel_section">
                                <div className="areaC_1_parallel_section">
                                    <p className="category_parallel_section"><b>{SN_5Article.Category}</b></p>
                                    <p className="subtitle_parallel_section"><b>{SN_5Article.Subtitle}</b></p>
                                </div>
                                <div className="areaC_2_parallel_section">
                                    <p className="category_parallel_section"><b>{SN_7Article.Category}</b></p>
                                    <p className="subtitle_parallel_section"><b>{SN_7Article.Subtitle}</b></p>
                                </div>
                                <div className="areaC_3_parallel_section">
                                    <p className="category_parallel_section"><b>{SN_9Article.Category}</b></p>
                                    <p className="subtitle_parallel_section"><b>{SN_9Article.Subtitle}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}