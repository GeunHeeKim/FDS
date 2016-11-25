commit - 저장하는 하나의 포인트, 게임하다가 중간에 저장하는 거 같은것.

로컬이 아닌 외부에 있는 모든 저장소 - remote


같은 부분을 수정하면 conflict


커밋 메세지 규칙정하기

.git

체크아웃 - 이동

hunks - 수정한 코드 한 줄 한줄의 모음을 가리킴


base - branch가 시작되는 commit의 시작점.

github - 원격 저장소.

git - 분산형 소스관리 시스템 자체를 말함.

git clone + 깃헙 사이트에서 주소를 카피해 와서 붙여넣기 하면 된다.

rm -rf .git - 깃을 떨어뜨리고 독립된 소스가 된다.


**Git ignore 설정할때, VIM 사용.**

vim .gitignore

들어가서
i 누르고 글자쓰기 Esc 하면 나옴.
V 누르면 비쥬얼


노멀 모드에서 p를 누르면 복사

:wq
저장하고 vim 을 나감

:q!
저장 안하고 vim 을 나감.


git flow init

git branch -a : 모든 브랜치를 보는 명령어
git checkout -b develop : 브랜치가 없으면 브랜치를 만들고 들어가기


git add .

git commit -m "message"

git push origin develop : git develop 서버 브렌치에 푸쉬하기


git add .
git commit -m "test message".

git push origin develop


feature 브렌치 따는 명령어:
git flow feature start chat


.gitignore 파일에 아래내용 넣어주기.

.DS_Store
*.swp


gitignore 파일을 만드려면 레포를 만들때 옵션에서 왼쪽꺼
node 옵션 선택을 해야한다.


