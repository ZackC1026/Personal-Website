import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

import attiny85ProgrammerImg from "@/assets/Attiny85Programmer.png";
import batteryCheckerImg from "@/assets/Battery Checker.png";
import boostConverterImg from "@/assets/Boost Converter.png";
import led555Img from "@/assets/LED_555.png";
import solarCellSolderingImg from "@/assets/SolarCellSoldering.png";
import solarCellTestingImg from "@/assets/SolarCellTesting.png";
import solarCellsDataImg from "@/assets/SolarCellsData.png";
import nfcBusinessCardImg from "@/assets/NFC_BUISNESSCARD.png";
import mainImg from "@/assets/Main.jpg";

const ResumPortfolio = () => {
    return (
        <main className="h-screen bg-neutral-50 flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
                {/* Resume Section */}
                <section className="w-full md:w-1/2 overflow-y-auto p-6 md:p-8 flex flex-col md:border-r border-gray-200 min-h-[calc(100vh-64px)] md:min-h-0">
                    <div className="w-fit mb-6 block">
                        <h1 className="font-heading text-4xl font-bold text-foreground underline decoration-4 underline-offset-8 decoration-gray-300">Resume</h1>
                    </div>

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
                                        <h3 className="text-xl font-medium text-foreground">Electrical Manufacturing Intern</h3>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">Jan. 2026 – Feb. 2026</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-muted-foreground font-medium">Downhole Battery Inc</p>
                                        <span className="text-sm text-muted-foreground">Calgary, AB</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-sm">
                                        <li>Assembled battery packs for downhole drilling applications, executing precision soldering and interconnect welding</li>
                                        <li>Validated battery pack integrity, including voltage and continuity, utilizing digital multimeters and decade boxes</li>
                                        <li>Executed quality assurance checks, identifying and resolving assembly defects to meet strict operational tolerances</li>
                                    </ul>
                                </div>

                                {/* UW Orbital */}
                                <div className="border-l-2 border-gray-200 pl-4 py-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-medium text-foreground">Electrical Team Lead</h3>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">Sep. 2025 – Present</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-muted-foreground font-medium">
                                            UW Orbital (Satellite Student Design Team)
                                        </p>
                                        <span className="text-sm text-muted-foreground">Waterloo, ON</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-sm">
                                        <li>Managed the electrical sub-team by delegating technical tasks, maintaining engineering documentation, and managing project budgets</li>
                                        <li>Oversaw final validation of satellite boards before competing in the 'Canadian Space Design Challenge 7'</li>
                                        <li>Guided perspective members through onboarding, designing a current-sensing PCB from schematic to assembly</li>
                                        <li>Simulated transient responses in LTspice to configure a 5V to 28V boost converter IC, subsequently designing a breakout board in Altium Designer for physical validation</li>
                                        <li>Integrated a buck converter breakout board schematic and layout into 6-layer electrical power system board</li>
                                        <li>Developed a highly repeatable solar cell soldering procedure, preventing unwanted shorts and ensuring stable joints</li>
                                        <li>Performed electrical characterization of solar panels using variable resistive loads and DMMs to verify open-circuit voltage, short-circuit current, and maximum power point</li>
                                        <li>Designed and assembled 100V/V Op-Amp breakout board for low side current sense applications</li>
                                    </ul>
                                </div>

                                {/* Midnight Sun */}
                                <div className="border-l-2 border-gray-200 pl-4 py-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-medium text-foreground">Electrical Team Member</h3>
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">June 2025 – April 2026</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-muted-foreground font-medium">
                                            Midnight Sun (Solar-Car Student Design Team)
                                        </p>
                                        <span className="text-sm text-muted-foreground">Waterloo, ON</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-sm">
                                        <li>Engineered an STM32-driven piezo speaker PCB featuring a flyback converter and a discrete MOSFET full-bridge</li>
                                        <li>Redesigned analog front end BMS board layout, improving heat dissipation during passive cell balancing</li>
                                        <li>Performed PCB bring-up and troubleshooting using lab instruments to validate power and signal integrity</li>
                                        <li>Designed a DC-DC buck converter PCB in Altium Designer to step down 5V to 3V3</li>
                                    </ul>
                                </div>

                            </div>
                        </section>
                    </div>
                </section>



                {/* Portfolio Section */}
                <section className="w-full md:w-1/2 overflow-y-auto p-6 md:p-8 flex flex-col bg-gray-50/50 min-h-[calc(100vh-64px)] md:min-h-0">
                    <div className="w-fit mb-6 block">
                        <h1 className="font-heading text-4xl font-bold text-foreground underline decoration-4 underline-offset-8 decoration-gray-300">Portfolio</h1>
                    </div>

                    {/* 1. BMS Analog Front End Board */}
                    <div className="columns-1 xl:columns-2 gap-6">
                        <ProjectCard
                            className="mb-6 break-inside-avoid"
                            title="BMS Analog Front End Board"
                            date="2025"
                            image={mainImg}
                            tags={["Altium Designer", "PCB Design", "Layout Design", "BMS"]}
                            description={[
                                "Re-engineered the Battery Management System (BMS) Analog Front End (AFE) to execute passive cell balancing, actively monitoring and dissipating excess cell voltage to ensure pack stability",
                                "Spearheaded a complete layout redesign, migrating from a restrictive M.2 form factor to a custom board-to-board connector configuration",
                                "Increased the total PCB surface area by 40%, enhancing thermal dissipation and improving field serviceability",
                                "Implemented best PCB design practice through differential routing for sensitive Iso-SPI channels, test pads for important nets, copper pour for power (onboard buck), GND vias, and teardrops on vias for increased manufacturability"
                            ]}
                            photos={[]}
                        />

                        {/* 2. 5V - 28V Boost Converter */}
                        <ProjectCard
                            className="mb-6 break-inside-avoid"
                            title="5V - 28V Boost Converter"
                            date="2025"
                            image={boostConverterImg}
                            tags={["Power Electronics", "LTspice", "Altium Designer", "Research"]}
                            description={[
                                <>Selected TPS55340 IC through calculating switching current needed for our use case using <a href="https://www.ti.com/lit/an/slva372d/slva372d.pdf?ts=1777104273372" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">TI’s documentation</a></>,
                                <>Scraped TPS55340 data sheet to configure feedback, comp network, and frequency pins to achieve 28V output to 5V input in 28ms. Documenting results and calculations in teams <a href="https://www.notion.so/uworbital/Boost-Source-Converter-Breakout-board-2eb8a26d7677807aafc1d849d8999c7d" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">Notion</a></>,
                                "Ran LTspice simulations to see and test transient startup/responses to load mimicking real use case, configuring output capacitors such that output voltage drops less than 5% when load switches on",
                                "Engineered breakout board for real life testing using Altium designer adding testpoints and LED indicators to aid in board bring-up",
                                "Implemented best layout principles through strategic placements of MLCCs minimizing hotloop and used Saturn PCB Toolkit to verify thermal capabilities",
                                "Verified components in BOM can handle switching velocity and current, choosing smaller package inductor and diode for ease of layout and selecting larger package capacitors to minimize DC-bias and higher current capacity"
                            ]}
                            photos={[]}
                        />

                        {/* 3. Solar Cell Work */}
                        <ProjectCard
                            className="mb-6 break-inside-avoid"
                            title="Solar Cell Work"
                            date="2025"
                            image={solarCellSolderingImg}
                            tags={["Solar Panels", "Soldering", "Testing"]}
                            description={[
                                "Developed a highly reliable mounting technique utilizing 0-ohm resistors and precisely calibrated hot-air rework parameters (high heat, low airflow velocity, and a specific incidence angle)",
                                "Characterized solar panel performance utilizing a digital multimeter and decade box to measure baseline open-circuit voltage and short-circuit current.",
                                "Swept load resistance to gather high-resolution voltage data in ~0.1V increments, ensuring high-fidelity data sets for Maximum Power Point Tracking (MPPT) calculations",
                                <>Generated I-V curves and calculated the Maximum Power Point (MPP), aggregating all raw data and performance metrics into a centralized spreadsheet for <a href="https://www.notion.so/uworbital/Solar-Board-REV-2-1f28a26d767780bd95c7f922a14ca06b" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">ongoing electrical analysis</a></>
                            ]}
                            photos={[
                                { url: solarCellTestingImg, caption: "Characterizing Solar Cells w/ DMM and Decade Box" },
                                { url: solarCellsDataImg, caption: "Solar Cell Voltage/Current/Power Charts" }
                            ]}
                        />

                        {/* 4. Heartbeat PCB */}
                        <ProjectCard
                            className="mb-6 break-inside-avoid"
                            title="Heartbeat PCB"
                            date="2026"
                            image={led555Img}
                            tags={["Analog Design", "PCB Design", "Soldering", "Teaching"]}
                            description={[
                                "Engineered an educational LED-array PCB driven by an astable 555-timer circuit with variable frequency control",
                                "Mentored young students through the hardware lifecycle, providing hands-on instruction in fundamental circuit design and safe soldering practices for board assembly"
                            ]}
                            photos={[]}
                        />

                        {/* 5. Garden Monitor PCB */}
                        <ProjectCard
                            className="mb-6 break-inside-avoid"
                            title="Garden Monitor PCB"
                            date="2026"
                            image=""
                            tags={["IoT", "Sensors", "PCB Design", "Low Power", "Soldering"]}
                            description={[
                                "Engineered a 4-layer, LiPo-powered IoT environmental monitor from schematic capture to PCB layout, integrating an ESP32-C3, an I2C SHT-40 air sensor, and an astable CMOS 555 timer for capacitive soil moisture sensing",
                                "Designed a custom capacitive probe utilizing specific polygon pours and keepouts to maximize fringing electric fields, ensuring high-sensitivity moisture detection while minimizing parasitic capacitance",
                                "Developed a discrete power-path management circuit utilizing a P-Channel MOSFET and Schottky diode to enable seamless load-sharing and safe, concurrent LiPo battery charging via a TP4056B IC.",
                                "Implemented rigorous PCB layout best practices, including strategic decoupling capacitor placement, antenna keepouts on the board edge, 90-ohm differential routing for USB 2.0, power trace widening, via stitching, teardrops, and thermal reliefs for large ICs"
                            ]}
                            photos={[]}
                        />

                        {/* 6. AA & AAA Battery Health Checker */}
                        <ProjectCard
                            className="mb-6 break-inside-avoid"
                            title="AA & AAA Battery Health Checker"
                            date="2026"
                            image={batteryCheckerImg}
                            tags={["Microcontrollers", "C/C++", "PCB Design", "Soldering"]}
                            description={[
                                "Engineered a custom PCB utilizing an ATtiny85 MCU to evaluate battery health by calculating internal resistance, achieved through open-circuit and MOSFET-switched load voltage measurements",
                                "Designed a compact, ergonomic board layout featuring integrated mounting points, tactile user input, and a clear LED diagnostic feedback system"
                            ]}
                            photos={[]}
                        />

                        {/* 7. NFC PCB Business Card */}
                        <ProjectCard
                            className="mb-6 break-inside-avoid"
                            title="NFC PCB Business Card"
                            date="2025"
                            image={nfcBusinessCardImg}
                            tags={["NFC", "PCB Design", "React", "Next.js"]}
                            description={[
                                "Designed an NFC based PCB business card utilizing a trace antenna to seamlessly transmit contact data to mobile devices",
                                "Leveraged parasitic energy harvesting to power the circuit entirely from the interrogating device's RF field, completely eliminating the need for an onboard battery"
                            ]}
                            photos={[]}
                        />

                        {/* 8. Arduino UNO R3 ATtiny85 programming shield */}
                        <ProjectCard
                            className="mb-6 break-inside-avoid"
                            title="Arduino UNO R3-ATtiny85 Programming Shield"
                            date="2026"
                            image={attiny85ProgrammerImg}
                            tags={["PCB Design", "Arduino", "Microcontrollers"]}
                            description={[
                                "Designed a custom programming shield for the Arduino UNO R3 to program ATtiny85 microcontrollers."
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
