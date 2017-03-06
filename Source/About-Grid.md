## 포토샵에서 그리드 라인 만드는 법.

1. 패턴 만들기
  : 높이 10px 에  폭이 1px 인 새창을 만들고 제일 하단에 1px의 색을 칠한다.

2. 포토샵 메뉴 > 편집 > 패턴 정의 하기.

3. 그리드를 주려는 레이어에서 더블클릭 -> 패턴을 선택해서 씌우기!!

* 보통 baseline은 패턴으로 정의하고,  컬럼은 룰러로 정의한다.

4. 컬럼방향 그리드 설정 - 포토샵의 룰러 - 메뉴 보기 > 새 안내선 설정!

5. git remote prune origin 후에 git branch -r 하면 리모트의 브랜치도 잘 보임.

### remote에 있는 branch 목록 보기

$ git branch -r


### local에 있는 branch 목록 보기

$ git branch -l


### local, remote에 있는 모든 branch 목록 보기

$ git branch -a

 

### local에 새로운 branch 만들기

$ git checkout -b feature-working-with-dbs 
(또는 git branch feature-working-with-dbs)

 

### local에 만들었던 branch 삭제하기
$ git checkout master 
(삭제 대상이 아닌 다른 branch로 이동 필요)

$ git branch -D feature-working-with-dbs


### local에 있는 branch를 remote로 저장하기

$ git push origin origin:refs/heads/new-feature

또는 

$ git push origin deveolp 



### remote에 있었던 branch 를 local로 다운받기

$ git checkout feature-working-with-dbs

 

### remote에 있던 branch 삭제

$ git push origin :heads/feature-working-with-dbs
