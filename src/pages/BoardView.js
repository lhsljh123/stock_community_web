import React, {useState} from 'react';
import styled from "styled-components";

const BoardDetail = () => {
    const articleInfo = {
        id: 1,
        nickname: "야성의돼지",
        title: "페이팔이나 스퀘어에서 결제서비스말고 하는 장사 있음?",
        content: "아무리봐도 다른곳은 하나도 없는 것 같은데..",
        date: "2020-12-31",
        view: 13,
        recommand: 3,
        comment: 3,
    }
    const commentList = [
        {
            nickname: "테스터1",
            comment: "테스트하고갑니다.",
            date: "2021-01-26"
        },
        {
            nickname: "테스터2",
            comment: "테스트하고갑니다.",
            date: "2021-01-27"
        },
        {
            nickname: "테스터3",
            comment: "테스트하고갑니다.",
            date: "2021-01-28"
        }
    ]
    return (
        <ArticleWrapper>
            <ArticleHeader>
                <Title>{articleInfo.title}</Title>
                <LeftView>
                    <View>{articleInfo.nickname}</View>
                    <Date>{articleInfo.date}</Date>
                </LeftView>
                <RightView>
                    <View>조회 {articleInfo.view}</View>
                    <View>추천 {articleInfo.recommand}</View>
                    <View>댓글 {articleInfo.comment}</View>
                </RightView>
            </ArticleHeader>
            <ArticleBody>
                <Content>{articleInfo.content}</Content>
            </ArticleBody>
            <ArticleFooter>
                <FooterTitle>전체 댓글 {articleInfo.comment} 개</FooterTitle>
                <CommentWrapper>
                {
                    commentList.map((commentObject, index) => {
                        return (
                        <CommentCover key={index}>
                            <NickName>{commentObject.nickname}</NickName>
                            <Comment>{commentObject.comment}</Comment>
                        </CommentCover>)
                    })
                }
                </CommentWrapper>
            </ArticleFooter>
        </ArticleWrapper>
    )
}
export default BoardDetail;

const ArticleWrapper = styled.div`
    width: 1160px;
    margin: 60px auto;
    font-family: tahoma,sans-serif;
    font-size: 12px;
    padding-top: 1px;
`
const ArticleHeader = styled.div`
    display: inline-block;
    width: 1160px;
    height: 60px;
    margin: 16px 0px 40px 0px;
    border-top: 1px solid #A7A7A7;
    border-bottom: 1px solid #A7A7A7;
`
const Title = styled.div`
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    margin: 9px 5px;
`
const LeftView = styled.div`
    float: left;
`
const RightView = styled.div`
    float: right;
`
const View = styled.div`
    display: inline-block;
    margin: 0px 5px;
`
const Date = styled.div`
    display: inline-block;
    margin: 0px 5px;
    color: #A7A7A7;
`

const ArticleBody = styled.div`
    width: 1160px;
    min-height: 300px;
    
`
const Content = styled.div`
    padding: 5px;
`

const ArticleFooter = styled.div`
    width: 1160px;
    min-height: 50px;
`
const FooterTitle = styled.div`
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    margin: 5px;
    padding: 5px 0px;
    
`
const CommentCover = styled.div`
    width: 100%;
    margin: 0px 5px;
    padding: 10px 0px;
    border-bottom: 1px solid #E7E7E7;
`
const NickName = styled.div`
    display: inline-block;
    width: 20%;
`
const Comment = styled.div`
    display: inline-block;
    width: 80%;
`
const CommentWrapper = styled.div`
    width: 100%;
    border-top: 1px solid #A7A7A7;
`