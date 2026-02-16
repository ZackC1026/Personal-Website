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
                        image="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2670&auto=format&fit=crop"
                        tags={["Altium Designer", "PCB Design", "Analog Electronics", "BMS"]}
                        description={[
                            "Engineered BMS analog front end board that detects batteries with off voltages and dissipates them to keep balance",
                            "Implemented best PCB design practice through differential routing for sensitive ISO-SPI channels, copper pour for power (onboard buck), GND vias, and teardrops on vias for increased manufacturability",
                            "Redesigned AFE layout from a N.VME form factor to a custom B2B connector setup, increasing board surface area and heat dissipation by 20%, leading to easier handling and replacement when servicing"
                        ]}
                        photos={[
                            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop"
                        ]}
                    />

                    <ProjectCard
                        title="AA & AAA Battery Health Checker"
                        date="2026"
                        image="https://images.unsplash.com/photo-1622435869300-8805f77878c7?q=80&w=2671&auto=format&fit=crop"
                        tags={["Embedded Systems", "C", "Microcontrollers", "PCB", "Soldering"]}
                        description={[
                            "Designed PCB board that measures open circuit voltage and voltage under load for AA and AAA batteries to calculate internal resistance and determine battery health using indicator LEDs",
                            "Programmed ATmega328 MCU using Arduino programmer to run custom firmware to measure voltage using ADC and drive lowside MOSFETs for load resistors",
                            "Optimized board to run off CR2032 coin cell battery through purpose placement of decoupling caps and use of voltage divider for ADC"
                        ]}
                        photos={[
                            "https://images.unsplash.com/photo-1593106578051-78923a510526?q=80&w=2670&auto=format&fit=crop"
                        ]}
                    />

                    <ProjectCard
                        title="5V - 28V Boost Converter"
                        date="2025"
                        image="https://images.unsplash.com/photo-1555664424-778a69022365?q=80&w=2670&auto=format&fit=crop"
                        tags={["Power Electronics", "LTspice", "Altium Designer", "Research"]}
                        description={[
                            "Selected TPS55340 IC for boost through calculating switching current needed for our use case",
                            "Scraped TPS55340 data sheet to configure feedback, comp network, and frequency pins to achieve 28V output to 5V input in 28ms. Documenting results and calculations in Notion",
                            "Ran LTspice simulations to see and test transient startup/responses to load mimicking real use case",
                            "Engineered boost breakout board for real life testing using Altium designer. Used copper pours to handle high currents up to 5A, adding testpoints and LED indicators, and minimizing current loop & thermal relief through stitching vias"
                        ]}
                        photos={[
                            "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2669&auto=format&fit=crop"
                        ]}
                    />

                    <ProjectCard
                        title="Garden Monitor PCB"
                        date="2026"
                        image="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2670&auto=format&fit=crop"
                        tags={["IoT", "Sensors", "PCB Design", "Low Power", "Soldering"]}
                        description={[
                            "Designed a PCB for monitoring soil moisture, temperature, and sunlight.",
                            "Optimized for low power consumption to run on batteries.",
                            "Logged data to a central server for analysis."
                        ]}
                        photos={[
                            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2670&auto=format&fit=crop"
                        ]}
                    />

                    <ProjectCard
                        title="Heartbeat PCB"
                        date="2026"
                        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
                        tags={["Medical Electronics", "Analog Design", "PCB", "Signal Processing", "Soldering"]}
                        description={[
                            "Used 555-Timers Astable mode to create a 16x heart shaped LED blinker PCB",
                            "Designed PCB layout and board shape to be aesthetically pleasing, allowing ease of soldering for couples to assemble and gift"
                        ]}
                        photos={[
                            "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2670&auto=format&fit=crop"
                        ]}
                    />

                    <ProjectCard
                        title="Solar Cell Work"
                        date="2025"
                        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
                        tags={["Solar Panels", "Soldering", "Testing"]}
                        description={[
                            "Developed a repeatable soldering technique for solar panels.",
                            "Achieved 100% assembly success rate across multiple units.",
                            "Performed electrical characterization (IV curves) using variable loads."
                        ]}
                        photos={[
                            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop"
                        ]}
                    />

                    <ProjectCard
                        title="NFC PCB Business Card"
                        date="2025"
                        image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
                        tags={["NFC", "PCB Design", "React", "Next.js"]}
                        description={[
                            "Built a minimalist NFC card that encodes a URL to my portfolio.",
                            "Designed the PCB antenna and layout for optimal coupling.",
                            "Integrated with a cloud-hosted digital portfolio."
                        ]}
                        photos={[
                            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
                        ]}
                    />

                    <ProjectCard
                        title="5V-3.3V Buck Converter"
                        date="2025"
                        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
                        tags={["Power Electronics", "Buck Converter", "PCB Design", "Testing"]}
                        description={[
                            "Designed a DC-DC buck converter to step down 5V to 3.3V.",
                            "Selected components for optimal efficiency and ripple reduction.",
                            "Validated output voltage stability under varying load conditions."
                        ]}
                        photos={[
                            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                        ]}
                    />
                </div>
            </section>
        </main>
    );
};

export default Portfolio;
