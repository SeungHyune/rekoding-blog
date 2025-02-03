import { NavLink } from "react-router-dom";
import styles from "./post.module.css";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CommentIcon,
  LikeIcon,
  ShareIcon,
} from "@components/icons";

const Post = () => {
  return (
    <section className={styles.postContainer}>
      <aside className={`${styles.leftSidebar} leftSidebar`}>
        <ul>
          <li>
            <strong>REACT</strong>
            <ul>
              <li>
                <NavLink className={styles.post} to="/post/1" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/post/2" title="">
                  구글 크롬 원격 데스크톱 설치 및 사용 가이드
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <strong>NEXT.JS</strong>
            <ul>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  구글 크롬 원격 데스크톱 설치 및 사용 가이드
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <strong>프론트엔드</strong>
            <ul>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  구글 크롬 원격 데스크톱 설치 및 사용 가이드
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <strong>DB</strong>
            <ul>
              <li>
                <NavLink to="/" title="">
                  99%가 모른다는 DB Connection 누수 문제
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <strong>기타</strong>
            <ul>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  구글 크롬 원격 데스크톱 설치 및 사용 가이드
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <strong>기타2</strong>
            <ul>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  구글 크롬 원격 데스크톱 설치 및 사용 가이드
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <strong>기타3</strong>
            <ul>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  구글 크롬 원격 데스크톱 설치 및 사용 가이드
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
              <li>
                <NavLink to="/" title="">
                  내가 보려고 작성한, 처음 맥북 세팅하기
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <section className={styles.postContent}>
        <article className={styles.titleBox}>
          <h1>99%가 모른다는 DB Connection 누수 문제</h1>
          <div>
            <span>2025.01.20</span>
          </div>
        </article>
        <article className={styles.contentBox}>
          {Array.from({ length: 150 }).map((_, idx) => (
            <li key={idx}>{idx}</li>
          ))}
        </article>
      </section>
      <aside className={`${styles.rightSidebar} rightSidebar`}>
        <div className={styles.socialButtons}>
          <button type="button">
            <LikeIcon />
            <span>9</span>
          </button>
          <button type="button">
            <ShareIcon />
          </button>
          <button type="button">
            <CommentIcon />
          </button>
        </div>
        <ul className={styles.tocList}>
          <li>프로젝트 KPT 회고</li>
          <li>프로젝트 KPT 회고</li>
          <li>프로젝트 KPT 회고</li>
          <li>프로젝트 KPT 회고</li>
        </ul>
      </aside>

      <div className={styles.scrollButtons}>
        <button className={styles.up} type="button">
          <ArrowUpIcon />
        </button>
        <button className={styles.down} type="button">
          <ArrowDownIcon />
        </button>
      </div>
    </section>
  );
};

export default Post;
