import React from 'react';

function AboutPage(){
    return(
        <div className="about-page">
            <h2 className="about-title">Why Picky Preventer?</h2>
            <p> Most pediatricians recommend that babies start trying solid foods between 4-6 months of age.
                This is a big job for parents because the foods that babies are exposed to at this age can prevent future
                picky eating and have a big impact on their child's eating habits for the rest of their life.
                However, it can be difficult to remember what your baby has tried, if they enjoyed the food, and how long it has been since they last ate it.
                Now Picky Preventer is here to help parents keep track of their child's exposures to different foods.
            </p>
            <div className="about-lower">
                <ul className="about-list">
                    <li>Picky eating doesn't normally begin until around 2 years of age.*</li>
                    <li>The number of exposures needed to change a child's preference increases with age*:
                        <ul>
                            <li>Infants: 1 exposure</li>
                            <li>2 year olds: 5-10 expsoures</li>
                            <li>3-4 year olds: 8-15 exposures</li>
                            <li>7-12 year olds: up to 20 exposures</li>
                        </ul>
                    </li>
                    <li>Repeated exposures to common food allergens can reduce the risk of developing food allergies.*</li>
                    <li>Trying a variety of foods as an infant sets children up for a better quality diet through childhood.*</li>
                </ul>
                <div className="luke-avocado-with-caption">
                    <img className="luke-avocado" src="luke-avocado.jpg" alt="baby eating avocado"></img>
                    <br/>
                    <p className="caption">Luke's first exposure to avocado.</p>
                </div>
            </div>
            <br/>
            <a className="source" href="https://www.healthy-height.com/blogs/growth-nutrition-guide/getting-kids-to-try-new-foods#:~:text=Put%20simply%2C%20children%20like%20what,Schwartz%20C.%2C%202019)."
            target="_blank">*Healthy Height</a>
            <a className="source" href="https://pubmed.ncbi.nlm.nih.gov/17635306/" target="_blank">*The importance of exposure for healthy eating in childhood</a>
        </div>
    )
}

export default AboutPage;