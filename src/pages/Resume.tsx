import Navbar from "@/components/Navbar";


const Resume = () => {
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />
            <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col">
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
        </main>
    );
};

export default Resume;
