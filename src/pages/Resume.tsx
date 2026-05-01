import Navbar from "@/components/Navbar";



const Resume = () => {
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />
            <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col">
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
        </main>
    );
};

export default Resume;
