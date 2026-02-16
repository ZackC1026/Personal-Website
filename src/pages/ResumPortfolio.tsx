import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";


const ResumPortfolio = () => {
    return (
        <main className="h-screen bg-neutral-50 flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
                {/* Resume Section */}
                <section className="w-full md:w-1/2 overflow-y-auto p-6 md:p-8 flex flex-col md:border-r border-gray-200 min-h-[calc(100vh-64px)] md:min-h-0">
                    <h1 className="font-heading text-4xl font-bold text-foreground mb-6 underline decoration-4 underline-offset-8 decoration-gray-300">Resume</h1>

                    <div className="space-y-8">
                        {/* Education */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Education</h2>
                            <div className="space-y-4">
                                <div className="border-l-2 border-gray-200 pl-4 py-1">
                                    <h3 className="text-xl font-medium text-foreground">University of Waterloo</h3>
                                    <p className="text-muted-foreground">Bachelor of Applied Science in Electrical Engineering</p>
                                    <p className="text-muted-foreground text-sm mt-1">GPA: 3.7 • Sep. 2025 - May 2030</p>
                                </div>
                            </div>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Experience</h2>
                            <div className="space-y-6">

                                {/* Downhole Battery Inc */}
                                <div className="border-l-2 border-gray-200 pl-4 py-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-medium text-foreground">Battery Assembly Worker</h3>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">Jan. 2026 – Feb. 2026</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-muted-foreground font-medium">Downhole Battery Inc</p>
                                        <span className="text-sm text-muted-foreground">Calgary, AB</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-sm">
                                        <li>Assembled battery packs for downhole drilling applications, including soldering PCBs and welding interconnects</li>
                                        <li>Performed verification of assembled packs using multimeter and decade box to validate voltage and continuity</li>
                                        <li>Identified and corrected assembly defects during QA checks to ensure battery packs met quality requirements</li>
                                    </ul>
                                </div>

                                {/* UW Orbital */}
                                <div className="border-l-2 border-gray-200 pl-4 py-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-medium text-foreground">Electrical Engineering Team Member</h3>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">Sep. 2025 – Present</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-muted-foreground font-medium">UW Orbital (Cubesat Student Design Team)</p>
                                        <span className="text-sm text-muted-foreground">Waterloo, ON</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-sm">
                                        <li>Ran LTspice simulations analyzing startup and load transient responses to configure a boost converter IC to step up 5V to 28V</li>
                                        <li>Used Altium Designer to create a breakout board for a boost converter IC to support real-world testing</li>
                                        <li>Developed a repeatable solar panel soldering technique to prevent pad-to-pad shorting, achieving 100% assembly success rate across multiple units</li>
                                        <li>Performed electrical characterization of solar panels using variable resistive loads and DMMs to verify open-circuit voltage, short-circuit current, and maximum power point</li>
                                        <li>Developed and assembled a current sensor for integration into a boost converter using Altium Designer</li>
                                    </ul>
                                </div>

                                {/* Midnight Sun */}
                                <div className="border-l-2 border-gray-200 pl-4 py-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-medium text-foreground">Electrical Engineering Team Member</h3>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">June 2025 – Present</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-muted-foreground font-medium">Midnight Sun (Solar-Car Student Design Team)</p>
                                        <span className="text-sm text-muted-foreground">Waterloo, ON</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-sm">
                                        <li>Redesigned analog front end BMS PCB board using Altium Designer to improve heat dissipation during passive cell balancing, leading to a 20% reduction in board temperature</li>
                                        <li>Performed PCB bring-up and troubleshooting using lab instruments to validate power and signal integrity</li>
                                        <li>Designed a DC-DC buck converter PCB in Altium Designer to step down battery voltage from 5.5V to 3.3V</li>
                                    </ul>
                                </div>

                            </div>
                        </section>
                    </div>
                </section>



                {/* Portfolio Section */}
                <section className="w-full md:w-1/2 overflow-y-auto p-6 md:p-8 flex flex-col bg-gray-50/50 min-h-[calc(100vh-64px)] md:min-h-0">
                    <h1 className="font-heading text-4xl font-bold text-foreground mb-6 underline decoration-4 underline-offset-8 decoration-gray-300">Portfolio</h1>

                    {/* 1. BMS Analog Front End Board */}
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

                        {/* 2. AA & AAA Battery Health Checker */}
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

                        {/* 3. 5V - 28V Boost Converter */}
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

                        {/* 4. Garden Monitor PCB */}
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

                        {/* 5. Heartbeat PCB */}
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

                        {/* 6. Solar Cell Work */}
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

                        {/* 7. NFC PCB Business Card */}
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

                        {/* 8. 5V-3.3V Buck Converter */}
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
            </div>
        </main>
    );
};

export default ResumPortfolio;
