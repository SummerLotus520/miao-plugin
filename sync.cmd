@echo off 
chcp 65001 >nul 
echo === 同步上游 Miao-Plugin 并提交本地修改 === 

:: 1. 进入你的本地仓库目录（请根据实际路径修改）
cd /d "F:\Miao-Plugin"

:: 2. 确保在 master 分支
git checkout master
if %errorlevel% neq 0 ( 
    echo [错误] 无法切换到 master 分支
    pause
    exit /b 1
)

:: 3. 暂存所有修改
git add .

:: 4. 检查是否有本地未提交的修改
git status --porcelain | findstr "^M" >nul
if %errorlevel% equ 0 ( 
    echo 检测到本地修改，正在提交...
    git commit -m "[手动同步]"
    if %errorlevel% neq 0 ( 
        echo [错误] 提交失败
        pause
        exit /b 1
    )
) else ( 
    echo 本地没有修改，跳过提交
)

:: 5. 添加上游 Miao-Plugin 远程（如果不存在）
git remote get-url upstream >nul 2>&1
if %errorlevel% neq 0 ( 
    git remote add upstream https://github.com/yoimiya-kokomi/miao-plugin.git
)

:: 6. 强制拉取最新代码
git fetch upstream --force
if %errorlevel% neq 0 ( 
    echo [错误] 拉取 Miao-Plugin 更新失败
    pause
    exit /b 1
)

:: 7. 检查是否有未同步的上游更新
git log HEAD..upstream/master --oneline >nul
if %errorlevel% equ 0 ( 
    echo 上游没有未同步更新
) else ( 
    echo 上游有未同步更新
)

:: 8. 合并上游更新
git merge upstream/master --no-edit --allow-unrelated-histories
if %errorlevel% neq 0 ( 
    echo [错误] 合并冲突！请手动解决后重新运行脚本
    pause 
    exit /b 1
)

:: 9. 推送到你的 fork（master 分支）
git push origin master
if %errorlevel% neq 0 ( 
    echo [错误] 推送失败，检查网络或权限
    pause
    exit /b 1
)

echo === 同步成功！本地修改和上游更新已推送 ===
pause
