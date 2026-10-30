const terminalHistory=[];let terminalHistoryPosition=0;let terminalDraft='';
const terminalManual={
help:['help [command]','See every command, or get help with one.'],
whoami:['whoami','Meet the person behind the laptop.'],
about:['about','A little more about Fouad.'],
skills:['skills','See the learning toolkit.'],
tools:['tools','List tools I’ve used in my cybersecurity learning.'],
education:['education','University and current study stage.'],
projects:['projects','List the projects on this portfolio.'],
certs:['certs','Open My certifications. Alias: certifications.'],
contact:['contact','Email and public profile links.'],
github:['github','Show the GitHub profile link.'],
linkedin:['linkedin','Show the LinkedIn profile link.'],
ls:['ls [certs]','List pretend desktop files, or certificate titles.'],
pwd:['pwd','Show this tiny desktop’s pretend directory.'],
cat:['cat <filename>','Read about.txt, skills.txt, projects.txt, contact.txt, or readme.txt.'],
open:['open <app>','Open certs, paint, notes, or terminal.'],
theme:['theme [blue|night|sky]','Change the laptop wallpaper. Without an argument, cycle colours.'],
date:['date','Show the time in your browser’s timezone.'],
echo:['echo <message>','Print a message back, exactly as typed.'],
neofetch:['neofetch','A little fouadOS system card.'],
fortune:['fortune','A small thought for the road.'],
history:['history','Show the commands you’ve tried this visit.'],
clear:['clear','Clear the display. Shortcut: Ctrl+L.'],
desktop:['desktop','Minimise this window.'],
exit:['exit','Return to the laptop desktop.'],
sleep:['sleep','Close the laptop. Your notes remain until refresh.']
};
const virtualFiles={
'about.txt':'Fouad Abdulhakeem\nFinal-year cybersecurity student in Abuja.\nExploring security operations and digital forensics.\nLearning through coursework, labs, and building projects.',
'skills.txt':'Tools I’ve used in cybersecurity learning\n\nNETWORK & WIRELESS\nWireshark · Nmap · Cisco Packet Tracer · hping · Aircrack-ng\n\nVULNERABILITY & WEB\nNessus · OpenVAS · Burp Suite · Metasploit\n\nRECONNAISSANCE\ntheHarvester · dnsenum\n\nPASSWORD AUDITING\nJohn the Ripper · Hydra · Crunch\n\nFORENSICS & BUILDING\nAutopsy · Python · Linux · SQL · Docker · MongoDB',
'projects.txt':'01  Autopsy investigation — digital forensics lab\n02  MongoDB RBAC — access-control lab\n03  AgentArena — software verification hackathon build\nRead the full notes in the portfolio’s Work section.',
'contact.txt':'Email: abdulhakeemfouad@gmail.com\nGitHub: https://github.com/Fuuaad05\nLinkedIn: https://www.linkedin.com/in/fouad-abdulhakeem-953550382',
'readme.txt':'Welcome, temporary laptop borrower.\nThis is a simulated terminal built for this portfolio.\nCommands only explore this little site.\nUse ↑ / ↓ for history and Tab to complete commands.\nTry certs, open paint, or theme night.'
};
function renderTerminal(){appContent.innerHTML='<div class="terminal-body"><pre class="terminal-lines" id="terminal-lines" aria-live="polite"></pre><form class="terminal-form" id="terminal-form"><label for="terminal-input">visitor@fouad:~$</label><input id="terminal-input" autocomplete="off" spellcheck="false" maxlength="200" aria-label="Tiny terminal command" placeholder="Try help"><button type="submit">Run ↵</button></form></div><div class="terminal-examples" aria-label="Try a command">'+['help','certs','neofetch','ls','theme night','open paint','contact','fortune'].map(c=>`<button data-command="${c}">${c}</button>`).join('')+'</div><div id="terminal-profile-links"></div><p class="terminal-key-hints">↑ ↓ history &nbsp;·&nbsp; Tab complete &nbsp;·&nbsp; Ctrl+L clear &nbsp;·&nbsp; '+Object.keys(terminalManual).length+' commands to poke around with</p>';drawTerminal();const input=document.getElementById('terminal-input');terminalHistoryPosition=terminalHistory.length;document.getElementById('terminal-form').onsubmit=e=>{e.preventDefault();const raw=input.value;input.value='';runCommand(raw)};appContent.querySelectorAll('[data-command]').forEach(b=>b.onclick=()=>runCommand(b.dataset.command));input.addEventListener('keydown',e=>{if(e.key==='ArrowUp'){e.preventDefault();if(terminalHistoryPosition===terminalHistory.length)terminalDraft=input.value;if(terminalHistoryPosition>0)input.value=terminalHistory[--terminalHistoryPosition]}else if(e.key==='ArrowDown'){e.preventDefault();if(terminalHistoryPosition<terminalHistory.length)terminalHistoryPosition++;input.value=terminalHistoryPosition===terminalHistory.length?terminalDraft:terminalHistory[terminalHistoryPosition]}else if(e.key==='Tab'){e.preventDefault();const prefix=input.value.toLowerCase();const matches=Object.keys(terminalManual).filter(c=>c.startsWith(prefix));if(matches.length===1)input.value=matches[0]+' ';else if(matches.length>1){terminalLines.push('Suggestions: '+matches.join(' · '));drawTerminal()}}else if(e.ctrlKey&&e.key.toLowerCase()==='l'){e.preventDefault();terminalLines=[];drawTerminal()}})}
function drawTerminal(){const box=document.getElementById('terminal-lines');if(!box)return;box.textContent=terminalLines.join('\n');box.scrollTop=box.scrollHeight}
function terminalLinks(kind){const target=document.getElementById('terminal-profile-links');if(!target)return;target.replaceChildren();const links={github:['GitHub ↗','https://github.com/Fuuaad05'],linkedin:['LinkedIn ↗','https://www.linkedin.com/in/fouad-abdulhakeem-953550382'],email:['Email Fouad ↗','mailto:abdulhakeemfouad@gmail.com']};for(const key of kind==='contact'?['email','github','linkedin']:[kind]){const a=document.createElement('a');a.textContent=links[key][0];a.href=links[key][1];if(key!=='email'){a.target='_blank';a.rel='noopener noreferrer'}target.append(a)}}
function setTerminalTheme(theme){if(!theme){wallpaper();return 'A change of scenery. Nice.'}const n={blue:0,night:1,sky:2}[theme];if(n===undefined)return 'Try: theme blue, theme night, or theme sky.';osDesktop.dataset.wallpaper=n;document.getElementById('os-wallpaper').textContent=['Wallpaper ◐','Night mode ☾','Sky blue ☀'][n];return 'Wallpaper set to '+theme+'.'}
function runCommand(raw){const text=raw.trim().slice(0,200);if(!text)return;terminalHistory.push(text);if(terminalHistory.length>100)terminalHistory.shift();terminalHistoryPosition=terminalHistory.length;terminalDraft='';const parts=text.split(/\s+/);let command=parts[0].toLowerCase();const args=parts.slice(1).join(' ');if(command==='certifications')command='certs';terminalLines.push('visitor@fouad:~$ '+text);const profileLinks=document.getElementById('terminal-profile-links');if(profileLinks)profileLinks.replaceChildren();let answer='';switch(command){
case 'help':if(args){const entry=terminalManual[args.toLowerCase()==='certifications'?'certs':args.toLowerCase()];answer=entry?entry.join('\n'):'No help entry for that command. Try help.'}else answer='LOOK AROUND\nwhoami · about · skills · tools · education · projects · certs\ncontact · github · linkedin\n\nPLAY WITH THE DESKTOP\nopen <app> · theme [blue|night|sky] · neofetch · fortune\n\nTINY SHELL TOYS\nls [certs] · pwd · cat <file> · echo <message> · date\nhistory · clear · desktop · exit · sleep\n\nTry help open for an example. ↑ / ↓ recalls commands.';break;
case 'whoami':answer='Fouad Abdulhakeem\nAspiring security analyst · Abuja, Nigeria';break;
case 'about':answer=virtualFiles['about.txt'];break;
case 'skills':case 'tools':answer=virtualFiles['skills.txt'];break;
case 'education':answer='B.Sc. Cyber Security\nNile University of Nigeria\nCurrently in my final year.';break;
case 'projects':answer=virtualFiles['projects.txt'];break;
case 'contact':answer=virtualFiles['contact.txt'];terminalLinks('contact');break;
case 'github':answer='https://github.com/Fuuaad05';terminalLinks('github');break;
case 'linkedin':answer='https://www.linkedin.com/in/fouad-abdulhakeem-953550382';terminalLinks('linkedin');break;
case 'pwd':answer='/home/visitor/fouad';break;
case 'ls':answer=!args?'about.txt   skills.txt   projects.txt\ncontact.txt   readme.txt   certificates/':/^(certs|certificates\/?)$/i.test(args)?certificateData.map((c,i)=>String(i+1).padStart(2,'0')+'  '+c.title).join('\n'):'This little directory has certificates/ and a few .txt files. Try ls.';break;
case 'cat':answer=virtualFiles[args.toLowerCase()]||'That file isn’t in this little desktop. Use ls to see the files.';break;
case 'date':answer=new Date().toLocaleString();break;
case 'echo':answer=text.replace(/^\S+\s*/, '');break;
case 'theme':answer=setTerminalTheme(args.toLowerCase());break;
case 'neofetch':answer='[ fouadOS ]\nOwner      Fouad Abdulhakeem\nRole       Cybersecurity student\nLocation   Abuja, Nigeria\nLearning   Security analysis + digital forensics\nGallery    '+certificateData.length+' certificates\nMode       Curious visitor\nUptime     As long as you feel like staying.';break;
case 'fortune':answer=['A good question is a useful tool.','Small clues can tell a bigger story.','Stay curious. Write down what you learn.','A little progress still counts.'][Math.floor(Math.random()*4)];break;
case 'history':answer=terminalHistory.map((c,i)=>String(i+1).padStart(2,' ')+'  '+c).join('\n');break;
case 'clear':terminalLines=[];drawTerminal();return;
case 'certs':terminalLines.push('Opening My certifications…');openApp('certificates');return;
case 'open':{const app={certs:'certificates',certifications:'certificates',certificates:'certificates',paint:'paint',doodle:'paint',notes:'notes',terminal:'terminal'}[args.toLowerCase()];if(app){terminalLines.push('Opening '+args+'…');openApp(app);return}answer='Try: open certs · open paint · open notes · open terminal';break;}
case 'desktop':case 'exit':terminalLines.push('Back to the desktop. See you around.');showDesktop();return;
case 'sleep':terminalLines.push('Laptop closed. Your notes are here until refresh.');laptop.close();return;
default:answer='That command isn’t on this little laptop. Type help to see what you can try.';
}terminalLines.push(answer);terminalLines=terminalLines.slice(-100);drawTerminal()}
