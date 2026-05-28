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
                                    <li>Engineered a 5V to 28V DC-DC boost converter breakout board in Altium Designer, validating transient load responses in LTspice and authoring a comprehensive board bring-up guide to enable team assembly and testing</li>
                                    <li>Integrated an MPPT breakout board schematic and layout into 6-layer electrical power system board</li>
                                    <li>Developed a 95% successful solar cell soldering procedure, preventing short circuits and ensuring stable joints</li>
                                    <li>Performed electrical characterization of solar panels using variable resistive loads and DMMs to verify open-circuit voltage, short-circuit current, and maximum power point to define system power budgets</li>
                                    <li>Managed 25-person electrical sub-team through supporting team meetings, developing short- and long-term goals, delegating technical tasks, maintaining engineering documentation and managing project budgets</li>
                                    <li>Oversaw validation of the satellite’s electrical system before competing in the ’Canadian Space Design Challenge 7’</li>
                                    <li>Guided prospective members through onboarding, designing a 100V/V Op-Amp PCB from schematic to assembly</li>
                                    <li>Spearheaded lab safety compliance by sourcing Safety Data Sheets (SDS) and authoring best practice documents</li>
                                </ul>
                            </div>

                            {/* Midnight Sun */}
                            <div className="border-l-2 border-gray-200 pl-4 py-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-xl font-medium text-foreground">Electrical Team Member</h3>
                                    <span className="text-sm text-muted-foreground whitespace-nowrap">June 2025 – Present</span>
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-muted-foreground font-medium">
                                        Midnight Sun (Solar-Car Student Design Team)
                                    </p>
                                    <span className="text-sm text-muted-foreground">Waterloo, ON</span>
                                </div>
                                <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-sm">
                                    <li>Engineering an STM32-based piezo car horn driver with a flyback converter and a discrete MOSFET full-bridge</li>
                                    <li>Redesigned analog front end BMS board layout by switching from an M.2 connector to custom board-to-board connectors, improving heat dissipation during passive cell balancing through increased surface area and heat-sinks</li>
                                </ul>
                            </div>

                            {/* Downhole Battery Inc */}
                            <div className="border-l-2 border-gray-200 pl-4 py-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-xl font-medium text-foreground">Electrical Manufacturing Intern</h3>
                                    <span className="text-sm text-muted-foreground whitespace-nowrap">February 2026</span>
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-muted-foreground font-medium">Downhole Battery Inc.</p>
                                    <span className="text-sm text-muted-foreground">Calgary, AB</span>
                                </div>
                                <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1 text-sm">
                                    <li>Assembled battery packs for underground drilling applications, executing harness soldering and spot welding</li>
                                    <li>Validated battery pack integrity, including voltage and continuity using digital multimeters and electronic-loads</li>
                                    <li>Supported quality assurance checks, identifying and resolving assembly defects to meet strict operational tolerances</li>
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
