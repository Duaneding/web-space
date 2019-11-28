git 常用指令记录

1.安装git客户端，不同操作系统有各自的安装方式，百度。
		$ git config --global user.name "Your Name"             --global参数代表这是一个全局配置
		$ git config --global user.email "email@example.com"
		$mkdir learngit      //创建一个叫做learngit的文件夹
		$pwd   //显示当前文件所在路径
2.$ git init   把当前文件夹初始化为git可管理的仓库
		
	    $git add readme.txt    //把文件添加到暂存区(stage)
        $git rm --cache <file> //把文件从暂存区删除
		$git commit -m "wrote a readme file"    //把暂存区所有文件提交到当前本地分支
3.git status  随时查看当前状态，linux操作系统可用指令git diff  查看具体修改的内容
		$git status    //查看仓库当前状态
		$git diff readme.txt    //查看具体修改了具体内容
4.时光机，提交很多次之后会产生很多commit记录，可以通过这些记录实现版本回退
		$git log   //查看自己的提交记录
		$git log --pretty=oneline //查看简洁的提交记录
		$git reset --hard HEAD^   //回退到上一个版本
		$git reset --hard 003123  //回退到id是003123开头的版本
		git reflog   //找不到id，就用这个，可以查到所有的commit命令
5.工作区和暂存区
		Untracked files:          //表示文件未被添加过
		add 操作都是把代码提交到暂存区,可以多次add
		commit 操作是把暂存区的代码提交到分支,commit时会把之前的所有add到暂存区的代码一次性提交到分支
6.管理修改
		$cat readme.txt    //查看工作区文件具体内容 
		$git diff HEAD -- readme.txt  //commit之后可以使用此指令查看此文件在工作区与版本库中的差异
7.撤销修改
		$git checkout -- readme.txt   //丢弃在工作区做出的修改，让工作区与版本库代码一致，总之是回到最近一次git commit或git add时的状态。
		$git reset HEAD readme.txt   //HEAD表示最新版本，如果已经add到了暂存区,但是还没有commit,可以使用此指令把暂存区的修改回退到工作区，即与当前工作区的内容保持一致
		$git reset --hard HEAD^  git reset --hard 647364 //回退到上一个版本或指定版本，如果不但add而且commit了，但是还没有push，可以使用版本回退功能。
		如果真的已经push到了远程仓库,那就没救了.
8.删除文件
		$rm readme.txt  //可以使用此指令直接删除工作区的文件，但是这个delete操作会在版本库中被记录,此时你的工作区与版本库状态是不一致的
		$git rm readme.txt   //在版本库中删除文件
		
		$git checkout -- readme.txt  //如果发现删错了工作区的文件，而版本库中的文件还存在，那么此指令可以从版本库中恢复工作区的文件
9.远程分支
		在github上构建远程仓库,并与本地仓库同步.
		$git branch -b dev     //创建dev分支，并切换到此分支
		$git checkout master   //切换到master分支
		$git merge dev     //master和dev只有一个commit提交的时候，可以像这样快速合并。两个都有提交的分支合并就会出现冲突
		$git branch -d dev  //既然master与dev分支已经同步，那么就可以放心的删除掉dev分支了
10.解决冲突
		$git branch -b feature1   //像9中一样创建新分支并在此分支上修改readme.txt内容,然后提交
		$git checkout master     //来到master分支，也修改readme.txt,然后提交
		$git merge feature1      //在master也提交完之后，合并分支，此时的合并就会出现冲突，需手动解决
		$git status            //查看冲突文件
		打开冲突文件,根据<<<<<<<,=========,>>>>>>>>,标记的不同分支的内容,将master分支的内容修改后,再提交
		$git merge feature1     //此次合并成功之后，版本库存在的就是你最近的一次提交记录
		$git log --graph --pretty=oneline --abbrev-commit    //查看分支合并情况
		$git branch -d feature1
11.分支管理策略
		$git merge --on-ff -m "merge with no-ff" dev  //快速合并会丢掉分支信息，带参数--no-ff的合并会留有commit记录
12.bug分支
		$git stash   //你正在dev分支上干活，活没干完，没办法提交；此时来了一个修复bug的任务，便可以使用此指令保存dev的工作现场，一个分支最好一次只保存一个现场
		$git status   //查看工作区是否干净
		$git checkout master   //确认工作区干净后，来到需要修复bug的分支
		$git branch -b issue-101   //在需要修复bug的分支下创建临时分支
		$git merge issue-101   $git branch -d issue-101  //修复完bug并在临时分支提交之后，来到需要修复bug的分支，合并临时分支，并删除临时分支
		$git checkout dev    //解决完bug再回到我们的dev分支继续干活
		$git stash list      //查看保存的现场清单
		$git stash pop stash@{0}  //恢复指定现场
		$git status         //查看恢复的现场
13.feature分支
		$git branch -D feature-vulcan     //强行删除feature-vulcan分支以及分支上的代码
14.多人协作
		git remote add origin git@github.com:andyaccount/team.git  //让你的小伙伴连接你们的远程仓库
		$git remote -v       //查看远程库的信息，抓取和推送的origin的地址
		$git clone git@github.com:Duaneding/learngitt.git       //你的小伙伴从远程抓取你的代码
		$git checkout -b dev origin/dev         //在本地创建dev分支,并且和远程dev分支联系起来
		
		$git pull      //把最新的提交从远程抓取下来，并自行在本地合并
		$git status    //合并如果有冲突，解决冲突，再推送
15.标签管理
		$git tag v1.0    //默认给当前分支的最新commit打上标签
		$git tag    //查看所有标签
		
		$git log --pretty=oneline --abbrev-commit //如果忘记给当前的commit打上标签，想起来时已经产生了很多条commit，这时需要找到历史提交的commit ID，然后打上就可以了
		$git tag v0.9 6224937    //通过commit的id打上标签
		$git show v0.9          //标签不是按时间顺序列出的，是按字母排序的，可以用此指令查看标签信息
		
		$git tag -a v0.1 -m "version 0.1 released" 3628164     //也可以-a指定标签名，-m指定说明文字
		$git tag -d v0.1 //删除标签；创建的标签都只存储在本地，不会推送到远程，打错的标签可以安全删除。
		$git push origin v1.0   // 将某个标签推送到远程
		$git push origin --tags   //一次性推送所有标签远程
		$git tag -d v0.9      //要删除远程标签，先从本地删除
		$git push origin :refs/tags/v0.9    //然后从远程删除
16.自定义Git
		//忽略特殊文件
		$vim .gitignore     //在Git工作区的根目录下创建一个特殊的.gitignore文件，然后把要忽略的文件名填进去，add或commit或push时会自动忽略这些文件
		i     //进入编写模式
		快捷键esc  //退出编写模式，进入命令行模式
		:q       //不保存退出
		:wq      //保存退出，等同shift+zz
		:wq!     //强制保存退出
		$git add -f App.class  //有时候添加某个文件发现是被.gitignore文件或略掉了，可以使用-f强制添加
		//设置Git的user name和email

		$git config –global user.name “yourname” 
		$git config –global user.email “youremail” 
		//配置别名
		$git config --global alias.st status   //告诉Git,以后st表示status,当然,其他的指令也可以这样来配置
		$git config --global alias.co checkout
		$git config --global alias.ci commit
		$git config --global alias.br branch
		$git config --global alias.unstage 'reset HEAD'  //撤销指令的配置
		$git config --global alias.last 'log -1'      //显示最后一次提交信息
		
		$git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"  //这样配置的log信息绝对酷炫
		
		--global是针对当前用户起作用,如果不加,就只是对当前仓库起作用.
		只针对仓库的配置保存在.git/config文件中,要删除别名,直接把对应行删掉即可.
		针对当前用户的配置放在用户主目录下的一个隐藏文件.gitconfig中
17.搭建git服务器
		$sudo apt-get install git   //第一步，安装git
		$sudo adduser git     //第二步，创建一个git用户，用来运行git服务
		$...                  //第三步，收集所有需要登录的用户公钥,导入/home/git/.ssh/authorized_keys文件里,一行一个,几百号人就不能这么玩了，需要Gitosis来管理公钥
		$sudo git init --bare sample.git //第四步，找一个位置设置初始化仓库,假设是在srv文件下
		$..//第五步，出于安全考虑，可以通过编辑/etc/passwd文件禁止git用户登录shell
		//git:x:1001:1001:,,,:/home/git:/bin/bash 改为 git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
		$git clone git@server:/srv/sample.git  //第六步，在各自的电脑上运行此命令克隆远程仓库
		




		git checkout -b dev
		git push origin dev:dev