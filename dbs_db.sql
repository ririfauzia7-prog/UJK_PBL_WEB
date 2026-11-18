--
-- PostgreSQL database dump
--

\restrict nL8eRMKTSuDqFRKXeWUVSBpnSFA4ByqwRO9Ug8YPiMrbZhrF6JEfVxy38a5kJFZ

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-11-18 13:19:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 220 (class 1259 OID 16763)
-- Name: siswa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.siswa (
    kode_siswa integer CONSTRAINT mahasiswa_id_siswa_not_null NOT NULL,
    nama character varying(100) CONSTRAINT mahasiswa_nama_not_null NOT NULL,
    jurusan character varying(100) CONSTRAINT mahasiswa_jurusan_not_null NOT NULL,
    tanggal_lahir date CONSTRAINT mahasiswa_tanggal_lahir_not_null NOT NULL,
    alamat text CONSTRAINT mahasiswa_alamat_not_null NOT NULL
);


ALTER TABLE public.siswa OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16762)
-- Name: mahasiswa_id_siswa_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mahasiswa_id_siswa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mahasiswa_id_siswa_seq OWNER TO postgres;

--
-- TOC entry 5013 (class 0 OID 0)
-- Dependencies: 219
-- Name: mahasiswa_id_siswa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mahasiswa_id_siswa_seq OWNED BY public.siswa.kode_siswa;


--
-- TOC entry 4856 (class 2604 OID 16766)
-- Name: siswa kode_siswa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.siswa ALTER COLUMN kode_siswa SET DEFAULT nextval('public.mahasiswa_id_siswa_seq'::regclass);


--
-- TOC entry 5007 (class 0 OID 16763)
-- Dependencies: 220
-- Data for Name: siswa; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.siswa VALUES (12356, 'paramadina mulya', 'Pendidikan Agama Islam', '2006-03-13', 'dapur m2h');
INSERT INTO public.siswa VALUES (13247, 'ananada', 'Teknik Informatika', '2026-11-18', 'jl.wadas no 7');
INSERT INTO public.siswa VALUES (56712, 'Zia', 'Sistem Informasi', '2005-03-15', 'jl manunggal');
INSERT INTO public.siswa VALUES (24004, 'Budi Santoso', 'Teknik Informatika', '2005-01-10', 'Jl. Merdeka No. 1');
INSERT INTO public.siswa VALUES (24005, 'Siti Aminah', 'Sistem Informasi', '2004-06-21', 'Jl. Melati No. 5');
INSERT INTO public.siswa VALUES (24006, 'Rizky Pratama', 'Teknik Informatika', '2005-09-30', 'Jl. Kenanga No. 12');
INSERT INTO public.siswa VALUES (24007, 'Dewi Lestari', 'Pendidikan Agama Islam', '2006-02-14', 'Jl. Mawar No. 8');
INSERT INTO public.siswa VALUES (24008, 'Ahmad Fauzi', 'Sistem Informasi', '2005-11-05', 'Jl. Anggrek No. 3');
INSERT INTO public.siswa VALUES (24010, 'Tes Postman', 'Sistem Informasi', '2005-05-20', 'Jakarta');


--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 219
-- Name: mahasiswa_id_siswa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mahasiswa_id_siswa_seq', 3, true);


--
-- TOC entry 4858 (class 2606 OID 16775)
-- Name: siswa mahasiswa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.siswa
    ADD CONSTRAINT mahasiswa_pkey PRIMARY KEY (kode_siswa);


-- Completed on 2026-11-18 13:19:09

--
-- PostgreSQL database dump complete
--

\unrestrict nL8eRMKTSuDqFRKXeWUVSBpnSFA4ByqwRO9Ug8YPiMrbZhrF6JEfVxy38a5kJFZ

