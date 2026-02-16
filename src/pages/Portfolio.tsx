import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";


const Portfolio = () => {
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />
            <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col bg-gray-50/50">
                <h1 className="font-heading text-4xl font-bold text-foreground mb-6 underline decoration-4 underline-offset-8 decoration-gray-300">Portfolio</h1>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <ProjectCard
                        title="BMS Analog Front End Board"
                        date="2025"
                        image=""
                        tags={["Altium Designer", "PCB Design", "Analog Electronics", "BMS"]}
                        description={[
                            "Engineered BMS analog front end board that detects batteries with off voltages and dissipates them to keep balance",
                            "Implemented best PCB design practice through differential routing for sensitive ISO-SPI channels, copper pour for power (onboard buck), GND vias, and teardrops on vias for increased manufacturability",
                            "Redesigned AFE layout from a N.VME form factor to a custom B2B connector setup, increasing board surface area and heat dissipation by 20%, leading to easier handling and replacement when servicing"
                        ]}
                        photos={[]}
                    />

                    <ProjectCard
                        title="AA & AAA Battery Health Checker"
                        date="2026"
                        image=""
                        tags={["Embedded Systems", "C", "Microcontrollers", "PCB", "Soldering"]}
                        description={[
                            "Designed PCB board that measures open circuit voltage and voltage under load for AA and AAA batteries to calculate internal resistance and determine battery health using indicator LEDs",
                            "Programmed ATmega328 MCU using Arduino programmer to run custom firmware to measure voltage using ADC and drive lowside MOSFETs for load resistors",
                            "Optimized board to run off CR2032 coin cell battery through purpose placement of decoupling caps and use of voltage divider for ADC"
                        ]}
                        photos={[]}
                    />

                    <ProjectCard
                        title="5V - 28V Boost Converter"
                        date="2025"
                        image=""
                        tags={["Power Electronics", "LTspice", "Altium Designer", "Research"]}
                        description={[
                            "Selected TPS55340 IC for boost through calculating switching current needed for our use case",
                            "Scraped TPS55340 data sheet to configure feedback, comp network, and frequency pins to achieve 28V output to 5V input in 28ms. Documenting results and calculations in Notion",
                            "Ran LTspice simulations to see and test transient startup/responses to load mimicking real use case",
                            "Engineered boost breakout board for real life testing using Altium designer. Used copper pours to handle high currents up to 5A, adding testpoints and LED indicators, and minimizing current loop & thermal relief through stitching vias"
                        ]}
                        photos={[]}
                    />

                    <ProjectCard
                        title="Garden Monitor PCB"
                        date="2026"
                        image=""
                        tags={["IoT", "Sensors", "PCB Design", "Low Power", "Soldering"]}
                        description={[
                            "Designed a PCB for monitoring soil moisture, temperature, and sunlight.",
                            "Optimized for low power consumption to run on batteries.",
                            "Logged data to a central server for analysis."
                        ]}
                        photos={[]}
                    />

                    <ProjectCard
                        title="Heartbeat PCB"
                        date="2026"
                        image=""
                        tags={["Medical Electronics", "Analog Design", "PCB", "Signal Processing", "Soldering"]}
                        description={[
                            "Used 555-Timers Astable mode to create a 16x heart shaped LED blinker PCB",
                            "Designed PCB layout and board shape to be aesthetically pleasing, allowing ease of soldering for couples to assemble and gift"
                        ]}
                        photos={[]}
                    />

                    <ProjectCard
                        title="Solar Cell Work"
                        date="2025"
                        image=""
                        tags={["Solar Panels", "Soldering", "Testing"]}
                        description={[
                            "Developed a repeatable soldering technique for solar panels.",
                            "Achieved 100% assembly success rate across multiple units.",
                            "Performed electrical characterization (IV curves) using variable loads."
                        ]}
                        photos={[]}
                    />

                    <ProjectCard
                        title="NFC PCB Business Card"
                        date="2025"
                        image=""
                        tags={["NFC", "PCB Design", "React", "Next.js"]}
                        description={[
                            "Built a minimalist NFC card that encodes a URL to my portfolio.",
                            "Designed the PCB antenna and layout for optimal coupling.",
                            "Integrated with a cloud-hosted digital portfolio."
                        ]}
                        photos={[]}
                    />

                    <ProjectCard
                        title="5V-3.3V Buck Converter"
                        date="2025"
                        image=""
                        tags={["Power Electronics", "Buck Converter", "PCB Design", "Testing"]}
                        description={[
                            "Designed a DC-DC buck converter to step down 5V to 3.3V.",
                            "Selected components for optimal efficiency and ripple reduction.",
                            "Validated output voltage stability under varying load conditions."
                        ]}
                        photos={[]}
                    />
                </div>
            </section>
        </main>
    );
};

export default Portfolio;
