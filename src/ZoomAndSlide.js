import React, { useState } from "react";
import { motion } from "framer-motion";

const ZoomAndSlide = () => {
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    const handleBtnClick = () => {
        
        setIsBtnClicked(true);
    };
    return (
        <motion.div className="carousel">
            <motion.div>
                <motion.img
                    src="assets/image/bg.svg"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    alt="Image"
                    initial={{opacity: 0, scale: 1.05, x: 0, y: 0 }}
                    animate={{opacity: 1, scale: 1.05, x: 0, y: 0 }}
                    transition={{ duration: 0.3, delay: 2 }}
                />

                <motion.img
                    src="assets/image/Logo01.png"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    alt="Image"
                    className="centered-logo"
                    initial={{opacity: 1, scale: 0.1, x: 0, y: -300}}
                    animate={{opacity: [1, 0.9, 0, 0], scale: [0.1, 3, 3.5, 0.1], x: 0, y: -300 }}
                    transition={{ duration: 10 }}
                />
                <motion.img
                    src="assets/image/Text01.svg"
                    alt="Image"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    className="centered-logo"
                    initial={{opacity: 0, scale: 0.8, x: 0, y: 900}}
                    animate={{opacity: [0, 1, 1, 1, 1, 1], scale: 0.8, x: 0, y: [900, 250, 100, 30, 30, -400]}}
                    transition={{ duration: 7, 
                        times: [0, 0.45, 0.65, 0.7, 0.95, 1], // Animation keyframes
                        delay: 4
                    }}
                />

                <motion.img
                    src="assets/image/Text02.svg"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    alt="Image"
                    className="centered-logo"
                    initial={{opacity: 0, scale: 0.2, x: -500, y: 350}}
                    animate={{opacity: [0, 0, 0, 1, 1, 1], scale: 0.2, x: -500, y: [400, 350, 350, 200, 200, -200]}}
                    transition={{ duration: 7,
                        times: [0, 0.45, 0.65, 0.7, 0.95, 1], // Animation keyframes
                        delay: 4}}
                />
                <motion.img
                    src="assets/image/bottom_border.svg"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    alt="Image"
                    initial={{opacity: 0, scale: 1, x: 0, y: 900}}
                    animate={{opacity: 1, scale: 1, x: 0, y: [900, 900, 600, 600, 600, 600]}}
                    transition={{ duration: 3, delay: 1.4 }}
                />

                <motion.img
                    src="assets/image/Logo02.svg"
                    alt="Logo"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    className="centered-logo"
                    initial={{ opacity: 1, rotate: 0, scale: 0, x: -900, y: -400 }}
                    animate={{ opacity: [1, 1, 1, 1, 1, 1, 0], rotate: [0, 1080, 460, 460, 380, 380,380],  scale: [0, 0.65, 0.6, 0.6, 0.35, 0.35, 0.35], x: [-900, 1300, 400,400,200, 200,200], y: [-800, 400, 0, 0,-330, -330, -330]}}
                    transition={{ 
                        duration: 10, 
                        times: [0, 0.7, 0.8, 0.88,0.92, 0.99, 1], // Animation keyframes
                        delay: 1.4
                    }}
                /> 

                <motion.img
                    src="assets/image/3dButton01.svg"
                    alt="button"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    className="centered-logo"
                    initial={{ opacity: 0, rotate: 19, scale: 0.26, x: 100, y: -260}}
                    animate={{ opacity: [0, 1, 1], rotate: [19, 19, 10],  scale: [0.26, 0.26, 0.26], x: [100, 100, 550], y: [-260, -260, -260]}}
                    transition={{
                        duration: 5, // Duration of the right movement
                        times: [0, 0.1, 0.2], // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        delay: 10.5
                      }}
                />

                <motion.img
                    src="assets/image/3dButton02.svg"
                    alt="button"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    className="centered-logo"
                    initial={{ opacity: 0, rotate: 20, scale: 0.2, x: 230, y: -310}}
                    animate={{ opacity: [0, 1, 1], rotate: [20, 20, 11],  scale: [0.2, 0.2, 0.2], x: [230, 230, 650], y: [-310, -310, -320]}}
                    
                    transition={{
                        duration: 5, // Duration of the right movement
                        times: [0, 0.1, 0.2], // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        delay: 10.5
                      }}
                />
                <motion.img
                    src="assets/image/3dButton04.svg"
                    alt="button"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    className="centered-logo"
                    initial={{ opacity: 0, rotate: 21, scale: 0.2, x: 165, y: -200}}
                    animate={{ opacity: isBtnClicked?[1, 1, 1]:[0, 1, 1], 
                        rotate: isBtnClicked? [12, 12, 12]:[21, 21, 12],
                        scale: isBtnClicked? [0.2, 0.2, 0.2]:[0.2, 0.2, 0.2],
                        x: isBtnClicked? [615, 1250, 625]:[165, 165, 615],
                        y: isBtnClicked? [-200, 130, -210]:[-200, -200, -200]}}
                    
                    transition={{
                        duration: isBtnClicked ? 3: 5, // Duration of the right movement
                        times: isBtnClicked ? [0, 0.3, 0.6]:[0, 0.1, 0.2] , // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        delay: isBtnClicked ? 0:10.5
                    }}

                />

                <motion.img
                    src="assets/image/LifeAtSkewb.svg"
                    alt="button"
                    onClick={handleBtnClick}
                    className="centered-logo"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    initial={{ opacity: 0, rotate: 0, scale: 0.08, x: 50, y: -370}}
                    animate={{ opacity: isBtnClicked ? [1, 1, 1]:[0, 1, 1], 
                               rotate: isBtnClicked ?[-9, -9, -9]:[0, 0, -9],  
                                scale: isBtnClicked ?[ 0.08, 0.08, 0.08]:[0.08, 0.08, 0.08],
                                x: isBtnClicked ? [530, 1125, 540]:[80, 80, 530], 
                                y: isBtnClicked ? [-370, -40, -370]:[-390, -390, -370]}}
                    transition={{
                        duration: isBtnClicked ? 3: 5, // Duration of the right movement
                        times: isBtnClicked ? [0, 0.3, 0.6]:[0, 0.1, 0.2], // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        delay: isBtnClicked ? 0:10.5
                      }}
                />

                <motion.img
                    src="assets/image/OurStoryText.svg"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    alt="OurStoryText"
                    className="centered-logo"
                    initial={{opacity:0,  rotate: 10, scale: 0.2, x: 900, y: 250}}
                    animate={{opacity: isBtnClicked ? [0, 0.5, 1, 1] : 0, 
                         rotate: isBtnClicked ? [10, 0, 0, 0] :0, 
                         scale: isBtnClicked ? [0.2, 0.2, 0.3, 0.4]:0, 
                         x: isBtnClicked ?[900,400, 0, -400]:900, 
                         y: isBtnClicked ?[250, 100, 100 , 100]:250}}
                    transition={{
                        duration: 2, // Duration of the right movement
                        times: isBtnClicked ? [0, 0.1, 0.2, 0.3]: 0, // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        ease: "linear", // Linear easing function for smooth movement
                      }}
                />

                <motion.img
                    src="assets/image/OurStoryImage01.jpg"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    id="OurStoryImage01"
                    alt="OurStoryImage01"
                    className="centered-logo"
                    initial={{opacity:0,  rotate: 20, scale: 0.3, x: 900, y: 250}}
                    animate={{opacity:isBtnClicked ?[0, 0.5, 1, 1, 1 ]: 0, 
                         rotate: isBtnClicked ? [20, 10, 0, -10, 0]:20, 
                         scale: isBtnClicked ?[0.2, 0.2, 0.2, 0.2, 0.2]:0.2, 
                         x: isBtnClicked ?[900, 700, 500, 200, -200]:900, 
                         y: isBtnClicked ?[250, 50, 0, 50,  100]:250}}
                    transition={{
                        duration: 2, // Duration of the right movement
                        times: isBtnClicked ?[0, 0,1, 0.2, 0.25, 0.3]:0, // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        ease: "linear", // Linear easing function for smooth movement
                        delay: 0.1
                      }}
                />

                <motion.img
                    src="assets/image/OurStoryImage02.jpg"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    id="OurStoryImage02"
                    alt="OurStoryImage02"
                    className="centered-logo"
                    initial={{opacity:0,  rotate: 20, scale: 0.5, x: 500, y: 450}}
                    animate={{opacity: isBtnClicked ?[0, 0, 1, 1, 1]:0,  
                        rotate: isBtnClicked ? [30, 10, 0, -10, 0]: 30, 
                        scale: isBtnClicked ? [0.35, 0.35, 0.35, 0.5, 0.6]:0.35,
                         x: isBtnClicked ? [1200, 1200, 900, 600, 400]:1200, 
                         y: isBtnClicked ? [150, 150, 200, 300, 300]:150}}
                    transition={{
                        duration: 2, // Duration of the right movement
                        times: isBtnClicked ? [0, 0.4, 0.6, 0.8, 1]:0, // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        ease: "linear", // Linear easing function for smooth movement
                        delay: 0.1
                      }}
                />

                <motion.img
                    src="assets/image/OurStoryImage03.jpg"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    id="OurStoryImage02"
                    alt="OurStoryImage02"
                    className="centered-logo"
                    initial={{opacity:0,  rotate: 20, scale: 0.15, x: 500, y: 200}}
                    animate={{opacity: isBtnClicked ? [0, 0, 1, 1, 1]: 0,  
                        rotate: isBtnClicked ? [30, 30, 0, -10, 0]: 30,
                         scale: isBtnClicked ? [0.15, 0.15, 0.2, 0.2, 0.2]: 0.15,
                          x:isBtnClicked ? [1200, 1200, 800, 600, 400]:1200, 
                          y:isBtnClicked ? [200, 200, 0, 0, 50]:200}}
                    transition={{
                        duration: 2, // Duration of the right movement
                        times: isBtnClicked ? [0, 0.4, 0.6, 0.8, 1]:0, // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        ease: "linear", // Linear easing function for smooth movement
                        delay: 0.1
                      }}
                />
                
                <motion.img
                    src="assets/image/3dButton03.svg"   
                    alt="button"
                    className="centered-logo"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    initial={{ opacity: 0, rotate: 20, scale: 0.19, x: 345, y: -590}}
                    animate={{ opacity: [0, 1, 1], rotate: [20, 20, 11],  scale: [0.19, 0.19, 0.19], x: [345,345, 785   ], y: [-590, -590, -630]}}
                    transition={{
                        duration: 5, // Duration of the right movement
                        times: [0, 0.1, 0.2], // Animation keyframes
                        repeat: 0, // Repeat the animation indefinitely
                        repeatDelay: 1, // Delay before repeating the animation
                        delay: 10.5
                      }}
                />                
            </motion.div>
        </motion.div>
    );
};
/*
             
                
                <motion.img
                    src="assets/image/Logo01.png"
                    alt="Image"
                    className="centered-logo"
                    initial={{opacity: 1, scale: 0.1, x: 0, y: -1350}}
                    animate={{opacity: [1, 0.9, 0, 0], scale: [0.1, 3, 3.5, 0.1], x: 0, y: -1350 }}
                    transition={{ duration: 13 }}
                />
                <motion.img
                    src="assets/image/Text01.svg"
                    alt="Image"
                    className="centered-logo"
                    initial={{opacity: 0, scale: 0.8, x: 0, y: -2050}}
                    animate={{opacity: 1, scale: 0.8, x: 0, y: [-2050, -2450, -2450, -2600, -2600. -3000]}}
                    transition={{ duration: 5, delay: 1.5}}
                />

                <motion.img
                    src="assets/image/Text02.svg"
                    alt="Image"
                    className="centered-logo"
                    initial={{opacity: 0, scale: 0.2, x: -500, y: -2600}}
                    animate={{opacity: [0, 0, 0, 0, 1], scale: 0.2, x: -500, y: [-2600, -2800, -2800, -3000, -3000, -3200]}}
                    transition={{ duration: 5, delay: 1.5}}
                />
                <motion.img
                    src="assets/image/bottom_border.svg"
                    alt="Image"
                    initial={{opacity: 0, scale: 1, x: 0, y: -2800}}
                    animate={{opacity: 1, scale: 1, x: 0, y: -3200}}
                    transition={{ duration: 2, delay: 1 }}
                />

                <motion.img
                    src="assets/image/Logo02.svg"
                    alt="Logo"
                    className="centered-logo"
                    initial={{ rotate: 0, scale: 0, x: -1500, y: -3500 }}
                    
                    transition={{ duration: 10,  delay: 2}}
                /> 
*/
export default ZoomAndSlide;