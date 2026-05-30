import Gradient from "./Grainient"
import Navbar from "./hero-section-components/nav-bar"
import LadingComponent from "./hero-section-components/lading-component"
export default function HeroSection() {
    return (
        <div className="w-[100%]">
            <div className="gradient-section absolute inset-0 z-0">
                <Gradient
                    color1="#000000"
                    color2="#000000"
                    color3="#4fd55b"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={8}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>
            <div className="main-contents z-10 relative">
                <LadingComponent />
            </div>
        </div>
    )
}