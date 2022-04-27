"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5790],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return o?n.createElement(d,i(i({ref:t},c),{},{components:o})):n.createElement(d,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},68802:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=o(83117),a=o(80102),r=(o(67294),o(3905)),i=["components"],s={},l="PRs",u={unversionedId:"Contributing/PRs",id:"Contributing/PRs",title:"PRs",description:"You've followed our coding style guidelines and steps on how to contribute code, and now you're ready to submit a PR to Enarx. Here's a quick guide on how to do it.",source:"@site/docs/Contributing/PRs.md",sourceDirName:"Contributing",slug:"/Contributing/PRs",permalink:"/docs/Contributing/PRs",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Contributing/PRs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git hook",permalink:"/docs/Contributing/Git-hook"},next:{title:"Issues",permalink:"/docs/Contributing/Issues"}},c={},m=[{value:"Check that your code is really ready",id:"check-that-your-code-is-really-ready",level:3},{value:"Squash your commits",id:"squash-your-commits",level:3},{value:"Commit messages",id:"commit-messages",level:3},{value:"Rebase onto upstream/main",id:"rebase-onto-upstreammain",level:3},{value:"Submit the pull request",id:"submit-the-pull-request",level:3}],p={toc:m};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prs"},"PRs"),(0,r.kt)("p",null,"You've followed our ",(0,r.kt)("a",{parentName:"p",href:"Coding-style"},"coding style guidelines")," and steps on ",(0,r.kt)("a",{parentName:"p",href:"Code#working-on-the-code"},"how to contribute code"),", and now you're ready to submit a PR to Enarx. Here's a quick guide on how to do it."),(0,r.kt)("p",null,"This guide assumes that you have ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo"},"forked our repo"),' and are working on a local feature branch of your fork. It also assumes that you have set our repo as a remote named "upstream" on your fork as described ',(0,r.kt)("a",{parentName:"p",href:"Code#on-your-local-machine"},"here"),"."),(0,r.kt)("h3",{id:"check-that-your-code-is-really-ready"},"Check that your code is really ready"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should run a quick ",(0,r.kt)("inlineCode",{parentName:"li"},"cargo fmt")," in all the crates where you've made changes and run ",(0,r.kt)("inlineCode",{parentName:"li"},"cargo test")," to double check that your changes didn't break functionality."),(0,r.kt)("li",{parentName:"ul"},"Check the output when you run a ",(0,r.kt)("inlineCode",{parentName:"li"},"git diff upstream/master"),". Do you see any changes you don't actually want to submit? Did you alter any code for testing purposes that shouldn't actually be part of the PR? If so, you should undo these changes.")),(0,r.kt)("h3",{id:"squash-your-commits"},"Squash your commits"),(0,r.kt)("p",null,"If you have a series of commits that reflects your work process itself rather than logical changes in the code (think commit messages like ",(0,r.kt)("inlineCode",{parentName:"p"},'"This actually works!"')," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},'"Whoops still broken"'),"), you need to squash these into logical commits that describe the changes you made. Unless your PR in unusually large and complex, this will mean one commit per PR. You can do this by rebasing within your branch:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git log")," will show you how many commits you have made on top of the existing code. If you've made 5 new commits that you want to squash into one commit, you can do so by issuing ",(0,r.kt)("inlineCode",{parentName:"p"},"git rebase -i HEAD~5"),". This last number will be the number of commits you're going to edit."),(0,r.kt)("p",null,"The menu that comes up will show your last 5 (or however many you specified) commits in order of most recent at the bottom. Note that this is the ",(0,r.kt)("strong",{parentName:"p"},"opposite")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"git log"),"'s commit order, which can be confusing. You will want to mark each commit ",(0,r.kt)("strong",{parentName:"p"},"except the oldest one you want to use")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fixup"),". The oldest commit you want to use should remain unaltered (it will be marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pick")," by default). Save and exit from this menu to keep all the code changes from all 5 of your commits, but have only one commit message for all of these changes."),(0,r.kt)("p",null,"Issue a ",(0,r.kt)("inlineCode",{parentName:"p"},"git log")," to see that your 5 commits have now become one."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Never mark your oldest commit (the oldest commit you want to use) with ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fixup"),". This will squash all of your commits, including that one, into the commit that came right before yours."),(0,r.kt)("h3",{id:"commit-messages"},"Commit messages"),(0,r.kt)("p",null,"Pull requests to Enarx repositories should contain ",(0,r.kt)("strong",{parentName:"p"},"logical commits"),". In other words, commits should only contain changes relevant to one feature or component of the code. This helps repositories maintain a coherent and understandable history of code changes."),(0,r.kt)("p",null,"To that end, ",(0,r.kt)("strong",{parentName:"p"},"merge commits are strictly not allowed"),". It is expected that any code up for a pull request will be rebased on top of the upstream Enarx repository's ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch. Fast-forward-only merges are acceptable if needed."),(0,r.kt)("p",null,"We recommend reading this ",(0,r.kt)("a",{parentName:"p",href:"https://chris.beams.io/posts/git-commit/"},"excellent article")," to understand how to write a good git commit message."),(0,r.kt)("p",null,"Commit messages should answer these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What?: a short summary of what you changed in the subject line."),(0,r.kt)("li",{parentName:"ul"},"Why?: what the intended outcome of the change is (arguably the most important piece of information that should go into a message)."),(0,r.kt)("li",{parentName:"ul"},"How?: if multiple approaches for achieving your goal were available, you also want to explain why you chose the used implementation strategy.\nNote that you should not explain how your change achieves your goal in your commit message.\nThat should be obvious from the code itself.\nIf you cannot achieve that clarity with the used programming language, use comments within the code instead.")),(0,r.kt)("p",null,"The commit message is primarily the place for documenting the why."),(0,r.kt)("p",null,"Commit message titles should follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),"."),(0,r.kt)("p",null,"Format is ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>: <description>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," is one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fix: A bug fix"),(0,r.kt)("li",{parentName:"ul"},"feat: A new feature"),(0,r.kt)("li",{parentName:"ul"},"perf: A code change that improves performance"),(0,r.kt)("li",{parentName:"ul"},"refactor: A code change that neither fixes a bug nor adds a feature"),(0,r.kt)("li",{parentName:"ul"},"style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,r.kt)("li",{parentName:"ul"},"test: Adding missing tests or correcting existing tests"),(0,r.kt)("li",{parentName:"ul"},"docs: Documentation only changes"),(0,r.kt)("li",{parentName:"ul"},"revert: Reverts a previous commit"),(0,r.kt)("li",{parentName:"ul"},"chore: Other changes that don't modify src or test files"),(0,r.kt)("li",{parentName:"ul"},"build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)"),(0,r.kt)("li",{parentName:"ul"},"ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)")),(0,r.kt)("p",null,"Commit messages are checked with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tomtom-international/commisery"},"Commisery"),"."),(0,r.kt)("h3",{id:"rebase-onto-upstreammain"},"Rebase onto upstream/main"),(0,r.kt)("p",null,"Ideally, you've been incrementally ",(0,r.kt)("a",{parentName:"p",href:"Code#keeping-your-code-up-to-date-with-the-projects-code"},"pulling changes from upstream into your code")," as you work. However, sometimes you will finish some work and realize you don't have the latest code from upstream. Fixing this is easy:"),(0,r.kt)("p",null,"Make sure you've done a ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit")," on your branch. Ideally you will also have squashed your commits as described above. Then issue:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git fetch upstream\ngit rebase upstream/main\n")),(0,r.kt)("p",null,"or alternatively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout main\ngit pull upstream main\ngit checkout <your branch>\ngit rebase main\n")),(0,r.kt)("p",null,"Sometimes, there will be conflicts in the files, and that's okay. Resolve the conflict in each file, run ",(0,r.kt)("inlineCode",{parentName:"p"},"git add <file>")," on each file, and then ",(0,r.kt)("inlineCode",{parentName:"p"},"git rebase --continue"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git log")," should now show your commit(s) on top of the latest commits from ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream/main"),"."),(0,r.kt)("h3",{id:"submit-the-pull-request"},"Submit the pull request"),(0,r.kt)("p",null,"On GitHub, go to your personal repo (the one you ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone"),"d earlier) and find the branch you worked on. You can see your branches at: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/<your_username>/<enarx_repo>/branches"),"."),(0,r.kt)("p",null,'You can then click on  "New pull request".'),(0,r.kt)("p",null,"If your PR includes multiple commits, explain what you are trying to achieve, to give context to the reviewers.\nIf your code fixes a specific issue, mentioning that issue (with ","#",'issue_number) is helpful too. Doing so \u2014\u202fby effectively saying something such as: "Fixes #123"\u202f\u2014 will close the corresponding issue when your PR is accepted. Make sure to properly link to the issue with the ',(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/enterprise/2.16/user/github/managing-your-work-on-github/closing-issues-using-keywords"},"correct keywords"),"."),(0,r.kt)("p",null,'Once you are ready, click on "Create pull request".'),(0,r.kt)("p",null,"You have just contributed code to the project, thanks!"))}h.isMDXComponent=!0}}]);