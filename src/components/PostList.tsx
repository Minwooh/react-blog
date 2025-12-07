import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
    hasNavigation?: boolean;
}

type TabType = "all" | "my";

function PostList({ hasNavigation = true }: PostListProps) {
    const [activeTab, setActiveTab] = useState<TabType>("all");

    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div
                        onClick={() => setActiveTab("all")}
                        className={
                            activeTab === "all"
                                ? "post__navigation--active"
                                : ""
                        }
                    >
                        전체
                    </div>
                    <div
                        onClick={() => setActiveTab("my")}
                        className={
                            activeTab === "my" ? "post__navigation--active" : ""
                        }
                    >
                        나의 글
                    </div>
                </div>
            )}

            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post__profile-box">
                                <div className="post__profile" />
                                <div className="post__author-name">mw</div>
                                <div className="post__date">
                                    2023.07.08 토요일
                                </div>
                            </div>
                            <div>게시글 {index}</div>
                            <div className="post__text">
                                영원을 꿈꾸던 널 떠나보내고 슬퍼하던 날까지도
                                떠나보냈네 오늘의 나에게 남아있는 건 피하지 못해
                                자라난 무던함뿐야 그곳의 나는 얼마만큼 울었는지
                                이곳의 나는 누구보다 잘 알기에 후회로 가득 채운
                                유리잔만 내려다보네 아 뭐가 그리 샘이 났길래
                                그토록 휘몰아쳤던가 그럼에도 불구하고 나는 너를
                                용서하고 사랑하게 될 거야 아파했지만 또 아파도
                                되는 기억 불안한 내게 모난 돌을 쥐여주던 깨진
                                조각 틈 새어 나온 눈물
                            </div>
                            <div className="post__utils-box">
                                <div className="post__delete">취소</div>
                                <div className="post_edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PostList;
