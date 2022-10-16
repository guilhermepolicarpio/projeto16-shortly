--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.sessions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.sessions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    id integer NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.urls ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.urls_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions OVERRIDING SYSTEM VALUE VALUES (6, 'e1df61b9-f78b-442c-8383-c5a310f6b5b2', 2, '2022-10-16 14:16:46.130916');
INSERT INTO public.sessions OVERRIDING SYSTEM VALUE VALUES (7, 'cd0ff0f7-d701-46ed-918e-2a26c44b8bdd', 1, '2022-10-16 14:21:18.351589');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls OVERRIDING SYSTEM VALUE VALUES ('https://app.slack.com/client/T03F7SF8UP4', 'W5jH0KSV4', 0, 2, '2022-10-16 14:18:19.304629', 2);
INSERT INTO public.urls OVERRIDING SYSTEM VALUE VALUES ('http://www.gazetadopovo.com.br/', 'HHZV-JozD', 0, 1, '2022-10-16 14:21:56.201959', 3);
INSERT INTO public.urls OVERRIDING SYSTEM VALUE VALUES ('http://topview.com.br/', 'N-Tno6FzR', 0, 1, '2022-10-16 14:33:47.536594', 4);
INSERT INTO public.urls OVERRIDING SYSTEM VALUE VALUES ('http://epocanegocios.globo.com/', 'IlgJBeHKQ', 0, 1, '2022-10-16 14:33:58.640874', 5);
INSERT INTO public.urls OVERRIDING SYSTEM VALUE VALUES ('http://www.youtube.com/?gl=BR&hl=pt', '0N1v-hgRD', 5, 1, '2022-10-16 14:34:10.467189', 6);
INSERT INTO public.urls OVERRIDING SYSTEM VALUE VALUES ('https://bootcampra.notion.site/Projeto-Shortly-API-21533489cd5042058524caf3429b62e4', 'xKxSejNP9', 0, 1, '2022-10-16 19:02:08.237107', 7);
INSERT INTO public.urls OVERRIDING SYSTEM VALUE VALUES ('https://engoo.com.br/app/daily-news', 'ZtD5e70Jy', 0, 1, '2022-10-16 19:02:25.353529', 8);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', '$2b$10$oWklFicR1B2Tj3xmoImZvezPlBtL2TtgL/f9bTmrNiMej0MGOot7y', '2022-10-16 12:50:20.320649');
INSERT INTO public.users VALUES (2, 'Guilherme', 'Guilherme@driven.com.br', '$2b$10$VI/9spFbWpkGwyFF8v2kIeMsax5D7ZHUaIPXwwrQWPtRmmnnwGxcS', '2022-10-16 14:09:26.516032');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 7, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--

