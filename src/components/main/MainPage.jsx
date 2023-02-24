import { ImageList, ImageListItem } from "@mui/material";
import { useTranslation } from "react-i18next";

import styles from "../main/MainPage.module.css";

const MainPage = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{t("starWarsWelcomeTitle")}</h1>
      </div>
      <ImageList
        className={styles.imageList}
        sx={{ margin: "auto", borderRadius: "24px" }}
        cols={3}
        rowHeight={164}
      >
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href={
            "https://www.google.com/search?q=anakin+skywalker&source=lmns&bih=821&biw=1440&rlz=1C5CHFA_enBG991BG991&hl=bg&sa=X&ved=2ahUKEwi669Lv3dn8AhV9x7sIHYRIDLEQ_AUoAHoECAEQAA"
          }
        >
          <ImageListItem key={1}>
            <img
              src={`https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2020%2F11%2Fanakin-episode-3-850x560.jpg`}
              srcSet={""}
              className={styles.image}
              alt="anakin"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=Darth+Vader&rlz=1C5CHFA_enBG991BG991&oq=dart&aqs=chrome.0.69i59j69i57j69i59l2j0i67j69i60l2j69i61.1419j0j4&sourceid=chrome&ie=UTF-8"
        >
          <ImageListItem key={2}>
            <img
              src={`https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=0%2C48%2C1536%2C768`}
              srcSet={""}
              className={styles.image}
              alt="vader"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=yoda&rlz=1C5CHFA_enBG991BG991&oq=yoda&aqs=chrome..69i57j69i59j35i39l2j46i67i199i465j69i60l3.511j0j9&sourceid=chrome&ie=UTF-8"
        >
          <ImageListItem key={3}>
            <img
              src={`https://www.liveabout.com/thmb/zahbMniDOR4iu1_6fRwvKCbW5Wg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/yoda-56a8f97a3df78cf772a263b4.jpg`}
              srcSet={""}
              className={styles.image}
              alt="yoda"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=luke+skywalker&rlz=1C5CHFA_enBG991BG991&sxsrf=AJOqlzXbSs-V-eeNn_N64YWQ0bZwql57xQ%3A1674476887678&ei=V33OY9aDKdqGxc8Pmb2FyAc&oq=Luke+S&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgQIIxAnMgsILhCABBCxAxCDATIICC4QgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMgUILhCABDIICAAQgAQQywEyCAgAEIAEEMsBOgoIABBHENYEELADOgcIABCwAxBDOg8ILhDUAhDIAxCwAxBDGAE6BAgAEEM6EQguEIAEELEDEIMBEMcBENEDOgcILhDUAhBDOgsIABCABBCxAxCDAToKCAAQsQMQgwEQQzoECC4QQzoKCAAQsQMQgwEQCjoICC4QgAQQsQM6BQgAEIAEOggILhCABBDUAkoECEEYAEoECEYYAVDKBViVDWC6EmgDcAF4AYABvwKIAYoKkgEHMC4zLjIuMZgBAKABAcgBEsABAdoBBggBEAEYCA&sclient=gws-wiz-serp"
        >
          <ImageListItem key={4}>
            <img
              src={`https://lumiere-a.akamaihd.net/v1/images/Lightsaber_853fb596.jpeg?region=178%2C0%2C813%2C812`}
              srcSet={""}
              className={styles.image}
              alt="luke"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=obi+wan+kenobi&rlz=1C5CHFA_enBG991BG991&sxsrf=AJOqlzXys2f9Zu0y1UjDbv49bV20KRWZgQ%3A1674476920116&ei=eH3OY8HcBq6Gxc8Pv5S5wAg&oq=Obi+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgQIIxAnMg0ILhCDARDUAhCxAxBDMgQIABBDMgsIABCABBCxAxCDATIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEOgcIIxDqAhAnOg0ILhDHARDRAxDqAhAnOg8ILhDUAhDqAhC0AhBDGAE6DAgAEOoCELQCEEMYAToMCC4Q6gIQtAIQQxgBOgcILhDUAhBDOhEILhCABBCxAxCDARDHARDRAzoICAAQgAQQsQM6BggjECcQEzoOCC4QgAQQsQMQgwEQ1AI6DgguEIAEELEDEMcBENEDOgcIABCABBAKOggILhCABBDUAkoECEEYAEoECEYYAVDKBFjiB2CBEmgBcAF4AIABxwGIAccEkgEDMC40mAEAoAEBsAEUwAEB2gEGCAEQARgB&sclient=gws-wiz-serp"
        >
          <ImageListItem key={5}>
            <img
              src={`https://media.vanityfair.com/photos/5d56eac902bf930008778de7/3:2/w_1998,h_1332,c_limit/obi-wan-ewan-series.jpg`}
              srcSet={""}
              className={styles.image}
              alt="obi-wan kenobi"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=chewbacca&rlz=1C5CHFA_enBG991BG991&sxsrf=AJOqlzUnZNQ6XExDb0BygczDCdkInYbEWw%3A1674476949605&ei=lX3OY6_IJJ-Sxc8P8a2k-Ag&oq=chew&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgQIABBDMgUILhCABDILCC4QgAQQxwEQ0QMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBwgAEIAEEAo6BwgjEOoCECc6DQguEMcBENEDEOoCECc6DAguEOoCELQCEEMYAToPCC4Q1AIQ6gIQtAIQQxgBOgwIABDqAhC0AhBDGAE6BAgjECc6CwgAEIAEELEDEIMBOgoILhCxAxCDARBDOgQILhBDOgcIIxCxAhAnOg0ILhCDARDUAhCxAxBDOg0IABCABBCxAxCDARAKOgoIABCxAxCDARBDOgcILhCABBAKOg0ILhCABBDHARDRAxAKSgQIQRgASgQIRhgBUOwBWJ4MYKEYaANwAXgAgAHkAYgB3AiSAQUwLjUuMZgBAKABAbABFMABAdoBBggBEAEYAQ&sclient=gws-wiz-serp"
        >
          <ImageListItem key={6}>
            <img
              src={`https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=336%2C0%2C864%2C864`}
              srcSet={""}
              className={styles.image}
              alt="chewbacca"
              loading="lazy"
            />
          </ImageListItem>
        </a>
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=jabba+the+hutt&rlz=1C5CHFA_enBG991BG991&sxsrf=AJOqlzXauuV8SwlOLEIwE1FPA8yaf_euIA%3A1674476965093&ei=pX3OY7umBfCMxc8P7aOvoAM&oq=Jabba&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgQIIxAnMggIABCABBDLATIICAAQgAQQywEyBQgAEIAEMggIABCABBDLATIFCC4QgAQyBQgAEIAEMgUIABCABDIFCC4QgAQyBQgAEIAEOgcIIxDqAhAnOg0ILhDHARDRAxDqAhAnOg8ILhDUAhDqAhC0AhBDGAE6DAgAEOoCELQCEEMYAToMCC4Q6gIQtAIQQxgBOgsIABCABBCxAxCDAToICAAQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOgsILhCxAxCDARDUAjoLCC4QgAQQsQMQgwE6CAguELEDEIMBOgYIIxAnEBM6BAgAEEM6BAguEEM6DQguELEDEIMBENQCEEM6CwguEIAEEMcBENEDOggIABCABBCxAzoHCAAQgAQQCjoICC4Q1AIQgARKBAhBGABKBAhGGAFQqwNY-gZg6w9oAXABeACAAaMBiAHJBZIBAzAuNZgBAKABAbABFMABAdoBBggBEAEYAQ&sclient=gws-wiz-serp"
        >
          <ImageListItem key={7}>
            <img
              src={`https://upload.wikimedia.org/wikipedia/en/5/53/Jabba_the_Hutt_in_Return_of_the_Jedi_%281983%29.png`}
              srcSet={""}
              className={styles.image}
              alt="jabba"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=han+solo&rlz=1C5CHFA_enBG991BG991&oq=han+solo&aqs=chrome.0.0i67j0i512j46i512j0i512l3j69i60l2.865j0j9&sourceid=chrome&ie=UTF-8"
        >
          <ImageListItem key={8}>
            <img
              src={`https://compote.slate.com/images/2b6fb34a-8047-4e17-b3d5-64987519657d.jpg`}
              srcSet={""}
              className={styles.image}
              alt="han solo"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=jar+jar+binks&rlz=1C5CHFA_enBG991BG991&sxsrf=AJOqlzUjZiHl_stIOxxt5qc9WOhLGmHiWQ%3A1674477034204&ei=6n3OY6aCDPqExc8Pl8u_kAc&oq=jar+jar+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLAToHCCMQ6gIQJzoNCC4QxwEQ0QMQ6gIQJzoPCC4Q1AIQ6gIQtAIQQxgBOgwIABDqAhC0AhBDGAE6DAguEOoCELQCEEMYAToECCMQJzoLCAAQgAQQsQMQgwE6BAgAEEM6CAgAELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoLCC4QsQMQgwEQ1AI6BggjECcQEzoECC4QQzoLCC4QgAQQsQMQgwE6CAgAEIAEELEDOgUILhCABDoFCAAQgAQ6CggAEIAEELEDEAo6BwgAEIAEEAo6DQguEIAEEMcBEK8BEApKBAhBGABKBAhGGAFQ0gRYygxg_hdoAXABeAGAAYUCiAGvCpIBBTAuNi4ymAEAoAEBsAEUwAEB2gEGCAEQARgB&sclient=gws-wiz-serp"
        >
          <ImageListItem key={9}>
            <img
              src={`http://esq.h-cdn.co/assets/17/07/640x480/sd-aspect-1487345526-jar-jar-new.jpg`}
              srcSet={""}
              className={styles.image}
              alt="jar jar"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=princess+leia&rlz=1C5CHFA_enBG991BG991&sxsrf=AJOqlzXDn6rYgu7YBVfzKQMB4zRbXk9zaA%3A1674477071333&ei=D37OY-r5E9GTxc8P7-WlkAU&oq=prince&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgQIIxAnMggILhCABBDLATIICC4QgAQQywEyCAguEIAEEMsBMgsILhCABBDUAhDLATIICC4QgAQQywEyCAguEIAEEMsBMggILhCABBDLATILCC4QgAQQ1AIQywEyCAguEIAEEMsBOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6CAgAEIAEEMsBOgcIIxDqAhAnOg0ILhDHARDRAxDqAhAnOg8ILhDUAhDqAhC0AhBDGAM6DAgAEOoCELQCEEMYAzoGCCMQJxATOgQIABBDOgQILhBDOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CgguELEDEIMBEEM6CAgAEIAEELEDOgoIABCxAxCDARAKOg4ILhCABBCxAxCDARDUAjoLCC4QgAQQsQMQ1AI6CAguELEDEIMBOg0IABCABBCxAxCDARAKOgUILhCABDoICC4QgAQQ1AI6BQgAEIAESgQIQRgASgQIRhgBUPIGWIMUYLAaaANwAXgAgAHYAYgBwwiSAQUwLjUuMpgBAKABAbABFMgBE8ABAdoBBggBEAEYCdoBBggCEAEYCNoBBggDEAEYAQ&sclient=gws-wiz-serp"
        >
          <ImageListItem key={10}>
            <img
              src={`https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/12/09/princess-leia.jpg?width=1200`}
              srcSet={""}
              className={styles.image}
              alt="leia"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=stormtrooper&rlz=1C5CHFA_enBG991BG991&sxsrf=AJOqlzUqs-a_n2rG29xHb4mcP_mTL3kuRg%3A1674477092980&ei=JH7OY564O8asxc8Pvtqp2Ac&oq=stormtr&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgQIABBDMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMgUILhCABDILCC4QgAQQ1AIQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBOgoIABBHENYEELADOgcIABCwAxBDOgYIIxAnEBM6BAgjECc6BwguENQCEEM6BAguEEM6BAguECc6CggAELEDEIMBEEM6DQguELEDEIMBENQCEEM6CgguELEDEIMBEEM6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoLCC4QgAQQsQMQgwE6DggAEIAEELEDEIMBEMkDOgcILhCABBAKOggILhCABBCxAzoICC4QsQMQgwE6CAgAEIAEELEDOgUIABCABDoLCC4QgwEQsQMQgAQ6CAguEIAEEMsBOgsILhCABBDHARCvAToOCC4QgAQQxwEQ0QMQywFKBAhBGABKBAhGGABQ8AJYtxJguhdoBHABeACAAaECiAHJC5IBBTAuNC40mAEAoAEByAEKwAEB&sclient=gws-wiz-serp"
        >
          <ImageListItem key={11}>
            <img
              src={`https://images.unsplash.com/photo-1579935110464-fcd041be62d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rvcm10cm9vcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80`}
              srcSet={""}
              className={styles.image}
              alt="stormtrooper"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=darth+maukl&source=lmns&bih=740&biw=1323&rlz=1C5CHFA_enBG991BG991&hl=bg&sa=X&ved=2ahUKEwjDreTE2d38AhX4x7sIHWY8A6IQ_AUoAHoECAEQAA"
        >
          <ImageListItem key={12}>
            <img
              src={`https://www.gamespot.com/a/uploads/original/1597/15971423/3932143-9378112320-38777.jpg`}
              srcSet={""}
              className={styles.image}
              alt="kylo"
              loading="lazy"
            />
          </ImageListItem>
        </a>
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=r2d2&bih=740&biw=1323&rlz=1C5CHFA_enBG991BG991&hl=bg&sxsrf=AJOqlzXNVED7I8lk2NTEsbsqwA5OH8YoJg%3A1674477169710&ei=cX7OY7aAK8GMxc8PmeObmAg&ved=0ahUKEwj2_InH2d38AhVBRvEDHZnxBoMQ4dUDCA8&uact=5&oq=r2d2&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBAguEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6DQguEMcBENEDEOoCECc6DgguEIAEELEDEIMBENQCOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAELEDEIMBOgUILhCABDoICC4QgAQQ1AI6CwguEIAEEMcBENEDSgQIQRgASgQIRhgAUIkBWKwLYJAMaAJwAXgAgAG1AYgBzgSSAQMwLjSYAQCgAQGwAQrAAQE&sclient=gws-wiz-serp"
        >
          <ImageListItem key={13}>
            <img
              src={`https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=247%2C0%2C951%2C536`}
              srcSet={""}
              className={styles.image}
              alt="r2d2"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=c3po&bih=740&biw=1323&rlz=1C5CHFA_enBG991BG991&hl=bg&sxsrf=AJOqlzXP-8IJECs5fCZJBZmYtM4KCwwfVg%3A1674477282938&ei=4n7OY632OL6Hxc8PoeyO-AE&ved=0ahUKEwit74j92d38AhW-Q_EDHSG2Ax8Q4dUDCA8&uact=5&oq=c3po&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgcIABCABBAKMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOgwILhDIAxCwAxBDGAI6DwguENQCEMgDELADEEMYAkoECEEYAEoECEYYAVDjA1i_BWCBBmgBcAF4AIAB0gGIAdIBkgEDMi0xmAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp"
        >
          <ImageListItem key={14}>
            <img
              src={`https://cdn.vox-cdn.com/thumbor/OHWrHFnIAFjkFd7o9ZOW3WTDR7c=/0x0:1549x811/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/3769230/C-3PO.0.png`}
              srcSet={""}
              className={styles.image}
              alt="c3po"
              loading="lazy"
            />
          </ImageListItem>
        </a>

        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://www.google.com/search?q=bb8&bih=740&biw=1323&rlz=1C5CHFA_enBG991BG991&hl=bg&sxsrf=AJOqlzXsH1zr-_aodQnpQz0a8XgTs4D5Kg%3A1674477285000&ei=5H7OY57ZPOiIxc8Pm8KpuAw&ved=0ahUKEwie24b-2d38AhVoRPEDHRthCscQ4dUDCA8&uact=5&oq=bb8&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ6gIQJzoPCC4Q1AIQ6gIQtAIQQxgBOgwIABDqAhC0AhBDGAE6DAguEOoCELQCEEMYAToECCMQJzoGCCMQJxATOgsIABCABBCxAxCDAToUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CwguEIAEELEDEIMBOggIABCABBCxA0oECEEYAEoECEYYAVDUA1jTB2DkCWgBcAF4AIAB5wGIAawEkgEFMC4xLjKYAQCgAQGwARTAAQHaAQYIARABGAE&sclient=gws-wiz-serp"
        >
          <ImageListItem key={15}>
            <img
              src={`https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496`}
              srcSet={""}
              className={styles.image}
              alt="bb8"
              loading="lazy"
            />
          </ImageListItem>
        </a>
      </ImageList>
    </div>
  );
};

export default MainPage;
