import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const RulesPage = () => {
  return (
    <main>
      <Nav />
      <div className="min-h-screen bg-[#252525] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
              Server Rules
            </h1>
            <p className="text-gray-400">Please read and follow these guidelines carefully</p>
          </div>

          <div className="space-y-12">
            <section className="bg-[#2d2d2d] rounded-lg p-8 shadow-lg hover:shadow-red-900/20 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-red-500">General Rules</h2>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Cheating:</strong> Intentionally using Hacked Clients, external programs, or hardware exploits to gain an unfair advantage.
                </li>
                <li>
                  <strong>Bug Exploitation:</strong> Exploiting server or client issues to gain an unfair advantage or disrupt server features.
                </li>
                <li>
                  <strong>DDoS Threats:</strong> Making threats to launch DDoS attacks.
                </li>
                <li>
                  <strong>Doxing:</strong> Sharing someone&apos;s private data without consent.
                </li>
                <li>
                  <strong>Report Abuse:</strong> Misusing the reporting system to intentionally annoy staff or hinder their work.
                </li>
                <li>
                  <strong>IP Ban Evasion:</strong> Evading an IP ban, which is typically issued for very serious offenses.
                </li>
                <li>
                  <strong>Teaming with IP Ban Evaders:</strong> Knowingly teaming with IP banned players during ranked, tournament, UHC, or Meetup matches.
                </li>
                <li>
                  <strong>Inappropriate Name:</strong> Using a name that is considered offensive, explicit, or otherwise inappropriate.
                </li>
                <li>
                  <strong>Inappropriate Skin:</strong> Using a skin that is considered offensive, explicit, or otherwise inappropriate.
                </li>
                <li>
                  <strong>Inappropriate Clan:</strong> Using a clan name or clan tag that is considered offensive, explicit, or otherwise inappropriate.
                </li>
                <li>
                  <strong>Fake Prizepool:</strong> Advertising rewards, prizes, or payouts and then failing to deliver them as promised.
                </li>
              </ul>
            </section>

            <section className="bg-[#2d2d2d] rounded-lg p-8 shadow-lg hover:shadow-red-900/20 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-red-500">Chat Rules</h2>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Disrespect:</strong> Demonstrating a lack of respect by directly insulting other players.
                </li>
                <li>
                  <strong>Toxic Behavior:</strong> Continuously sending toxic messages and complaints in chat that are not specifically directed at any individual or group of players.
                </li>
                <li>
                  <strong>Racism:</strong> Disrespecting an individual or group of players based on their origin, race, or skin color.
                </li>
                <li>
                  <strong>Server Advertisement:</strong> Directly or indirectly promoting another Minecraft server.
                </li>
                <li>
                  <strong>Death Wishes:</strong> Directly or indirectly expressing desires for harm, suffering, or death towards other players.
                </li>
                <li>
                  <strong>Spam:</strong> Continuously and repeatedly flooding the chat with messages that lack real meaning or contain repetitive content.
                </li>
              </ul>
            </section>

            <section className="bg-[#2d2d2d] rounded-lg p-8 shadow-lg hover:shadow-red-900/20 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-red-500">Screen Sharing Rules</h2>
              <p className="mb-6 text-gray-300">
                <strong className="text-white">Software:</strong> Screen Sharing is a method used by our staff team to catch cheaters by connecting to the suspected player&apos;s PC with a remote desktop application. We only use trusted programs which are either open source or run by a trusted company such as Echo to ensure your safety. All of our applications will be removed once the screen share has been completed.
              </p>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Bannable Offenses:</strong> After being frozen, you are not allowed to plug in or remove any USB devices and you may not modify or delete any files. Furthermore, manually disabling key processes, binding multiple buttons to left and right click, having any macros installed, modifying mouse or keyboard settings after being frozen, or playing with multiple mice connected are punishable offenses. Recording or opening any application during a Screen Share without staff instructions is not permitted either.
                </li>
                <li>
                  <strong>Rights:</strong> You have to follow the instructions of our staff without needless delays. They will not mess with your personal files or download any sketchy applications. If you feel uncomfortable, you have every right to interfere and refuse the Screen Share at the cost of getting banned. If you feel like there was any abuse of power, you can immediately report the responsible staff through our ticket system.
                </li>
              </ul>
            </section>

            <section className="bg-[#2d2d2d] rounded-lg p-8 shadow-lg hover:shadow-red-900/20 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-red-500">Lifesteal Team Rules</h2>
              <p className="mb-6 text-gray-300">
                <strong className="text-white">In-game command: </strong>
                Use <code className="bg-[#353535] px-2 py-1 rounded">/Rules</code> to see all season rules.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Forbidden Actions</h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>No Hacked Clients</li>
                <li>No Movements Mods</li>
                <li>No Inventory Mods</li>
                <li>No Health indicators</li>
                <li>No Radar</li>
                <li>No Freecam</li>
                <li>No AutoPlace</li>
                <li>No Harmful Macros or Scripts</li>
                <li>No abusing bugs</li>
                <li>No using dupe methods</li>
                <li>No Alts killing abusing</li>
                <li>No use X-Ray</li>
              </ul>
              <div className="mt-6">
                <strong className="text-white">Reports: </strong>
                <span className="text-gray-300">Report all bugs and cheaters in our Discord: </span>
                <a href="https://discord.gg/thegrail" className="text-red-400 hover:text-red-300 underline transition-colors" target="_blank" rel="noopener noreferrer">
                  discord.gg/thegrail
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default RulesPage;