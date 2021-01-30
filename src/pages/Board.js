import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Button from "../components/atoms/Button"
import Dialog from "../components/templates/Dialog"

const Board = () => {
    // 1. Container
    const articleList = [
        {
            id: 1,
            title: "페이팔이나 스퀘어에서 결제서비스말고 하는 장사 있음?",
            nickname: "야성의돼지",
            date: "2020-12-31",
            view: 20,
            recommand: 3
        },
        {
            id: 2,
            title: "키움 9시반에 거래하면 수수료 더 높게받음?",
            nickname: "홀짝꿀잼",
            date: "2020-12-31",
            view: 50,
            recommand: 6
        },
        {
            id: 3,
            title: "특정기간 발바닥부터 머리끝까지 다먹는 비율이 얼마나 될까",
            nickname: "ㅇㅇ",
            date: "2020-12-31",
            view: 10,
            recommand: 5
        },
    ]
    
    // dialog 관련 함수
    const [dialog, setDialog] = useState(false);
    const onClick = () => setDialog(true);
    const onConfirm = () => setDialog(false);
    const onCancel = () => setDialog(false);

    // 2. Presenter
    return (
    <>
        <Cover>
            <ArticleHeader>
                <ArticleId>ID</ArticleId>
                <ArticleSubject>제목</ArticleSubject>
                <ArticleNickname>글쓴이</ArticleNickname>
                <ArticleDate>작성일</ArticleDate>
                <ArticleView>조회</ArticleView>
                <ArticleRecommand>추천</ArticleRecommand>
            </ArticleHeader>
            <ArticleList>
                {articleList.map( (article)=> {
                    return <ArticleLine>
                        <ArticleId>{article.id}</ArticleId>
                        <Link to={`board/${article.id}`}>
                            <ArticleSubject>{article.title}</ArticleSubject>
                        </Link>
                        <ArticleNickname>{article.nickname}</ArticleNickname>
                        <ArticleDate>{article.date}</ArticleDate>
                        <ArticleView>{article.view}</ArticleView>
                        <ArticleRecommand>{article.recommand}</ArticleRecommand>
                    </ArticleLine>
                })}
            </ArticleList>
            <Button onClick={onClick} size="medium">작성</Button>
        </Cover>  
        <Dialog 
            title="정말로 삭제하시겠습니까?"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={onConfirm}
            onCancel={onCancel}
            visible={dialog}
        >
            데이터를 정말로 삭제하시겠습니까?
        </Dialog> 
    </>
    );
}
export default Board;
// 3. Design
const Cover = styled.div`
    width: 1160px;
    margin: 60px auto;
    font-family: tahoma,sans-serif;
    font-size: 12px;
    padding-top: 1px;
`

const ArticleList = styled.div`
    margin: 0px 0px 20px 0px;
`
const ArticleHeader = styled.div`
    width: 100%;
    font-weight: 600;
    border-top: 3px solid #228be6;
    border-bottom: 1px solid #228be6;
    padding: 5px;
`
const ArticleId = styled.div`
    display: inline-block;
    width: 30px;
`
const ArticleSubject = styled.div`
    display: inline-block;
    width: calc(60% - 30px);
`
const ArticleNickname = styled.div`
    display: inline-block;
    width: calc(40% - 240px);
`

const ArticleDate = styled.div`
    display: inline-block;
    width: 120px;
`
const ArticleView = styled.div`
    display: inline-block;
    width: 60px;
`
const ArticleRecommand = styled.div`
    display: inline-block;
    width: 60px;
`
const ArticleLine = styled.div`
    width: 100%;
    border-bottom: 1px solid #228be6;
    padding: 5px;
`