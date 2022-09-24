import { useNavigate } from "react-router-dom"


const Logo = () => {
    const navigate = useNavigate()
    

    return (
        <div className="" style={{ cursor: "pointer"}} onClick={() => navigate("/")}>
            <svg width="168" height="28" viewBox="0 0 168 28" fill="var(--text-color)" xmlns="http://www.w3.org/2000/svg" className="cmc-logo-img">
                <path d="M24.7 16.7c-.5.3-1 .4-1.5.1-.6-.3-.9-1-.9-2v-3c0-1.6-.6-2.6-1.6-2.9-1.7-.5-3 1.5-3.5 2.3l-3 4.7v-5.7c0-1.4-.5-2.2-1.3-2.4-.6-.2-1.4-.1-2.2 1.1L4 19.4c-1-1.7-1.4-3.5-1.4-5.4 0-6.3 5.2-11.5 11.6-11.5C20.6 2.5 26 7.7 26 14c0 1.3-.4 2.3-1.2 2.7Zm3.8-2.7c0-7.8-6.4-14-14.3-14C6.4 0 0 6.3 0 14s6.4 14 14.2 14c3.6 0 7-1.3 9.7-3.7.5-.5.6-1.3 0-1.8a1.3 1.3 0 0 0-1.8-.1 11.7 11.7 0 0 1-16.5-.8l6-9.4v4.3c0 2.1.9 2.8 1.6 3 .7.2 1.8 0 2.9-1.7l3.3-5.2.3-.5v2.7c0 2 .8 3.5 2.2 4.3 1.3.7 3 .6 4.2-.2 1.6-1 2.4-2.8 2.4-4.9Zm19.8-4.8c.3.2.6.7.6 1 0 .7-.6 1.3-1.2 1.3l-.5-.1c-.7-.6-1.7-1-2.7-1-2.3 0-4 2-4 4.3s1.7 4.2 4 4.2c1.2 0 2.3-.5 3-1.2.3-.2.5-.2.8-.2.6 0 1.1.5 1.1 1s-.2.8-.6 1a6.9 6.9 0 0 1-4.2 1.6c-3.7 0-6.7-2.9-6.7-6.5s3-6.5 6.7-6.5c1.3 0 2.6.4 3.7 1.1Zm6.6 2.7c2.5 0 4.6 2 4.6 4.6 0 2.5-2 4.6-4.6 4.6a4.8 4.8 0 0 1-4.7-4.6c0-2.5 2.1-4.6 4.7-4.6Zm0 7c1.1 0 2-1 2-2.4s-.9-2.2-2-2.2c-1.2 0-2.2.8-2.2 2.2 0 1.4 1 2.4 2.2 2.4Zm6.2.8v-6.4c0-.7.5-1.3 1.2-1.3s1.3.6 1.3 1.3v6.4c0 .7-.6 1.3-1.3 1.3-.7 0-1.2-.6-1.2-1.3Zm-.2-10c0-1 .6-1.6 1.4-1.6.9 0 1.6.7 1.6 1.5s-.7 1.5-1.6 1.5c-.8 0-1.4-.7-1.4-1.5Zm7.7 6.6v3.4c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3V13c0-.5.4-1 1-1 .5 0 1 .5 1 1 1-1 2-1 2.8-1 2.6 0 3.7 1.8 3.7 4v3.7c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3v-3.4c0-1.1-.1-2-1.7-2-1.2 0-1.6.9-1.6 2Zm14.3 1.3a.8.8 0 0 1-.7-.3l-3-3.2v5.6c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3V8.6c.1-.2.3-.3.5-.3l.6.3 4.7 5.2.5.3.4-.3L88 8.6l.6-.3c.2 0 .4.1.5.3v11.1c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3v-5.6l-3 3.2-.6.3Zm12.4 1.3c1.1 0 2-1 2-2.4s-1-2.3-2-2.3c-1.2 0-2 1-2 2.3 0 1.3.8 2.4 2 2.4ZM98 20v-.3c-.6 1-2.2 1.4-3.2 1.4-2.4 0-4.2-2.1-4.2-4.6 0-2.5 1.9-4.6 4.4-4.6a4 4 0 0 1 3 1.4V13a1 1 0 0 1 2 0v7c0 .6-.5 1-1 1a1 1 0 0 1-1-1Zm9.1-5.8h-.3c-1.6.1-1.9 1-1.9 2v3.5c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3V13c0-.5.5-1 1-1 .6 0 1 .5 1 1 1-.8 1.7-1 2.5-1h.3c.6 0 1.2.4 1.2 1 0 .7-.6 1.2-1.2 1.2Zm10 5 .1.5c0 .7-.6 1.3-1.3 1.3-.4 0-.8-.3-1.1-.7l-3-3.3v2.7c0 .7-.6 1.3-1.3 1.3-.7 0-1.2-.6-1.2-1.3V9.6c0-.7.5-1.3 1.2-1.3s1.3.6 1.3 1.3v6.3l3-3.2c.3-.3.7-.7 1.1-.7.6 0 1.2.6 1.2 1.3l-.1.6-2.4 2.4 2.4 2.8Zm3.1-3.5h3.7c0-1-.8-1.6-1.8-1.6s-1.9.6-1.9 1.6Zm5.2 1.6h-5.2c0 1.5 1.5 1.7 2.2 1.7.4 0 1.1 0 1.7-.3l.6-.2c.6 0 1 .5 1 1 0 .4-.2.7-.5 1-.8.5-1.8.6-2.8.6-2.6 0-4.8-1.4-4.8-4.5 0-2.5 1.4-4.7 4.4-4.7 2.5 0 4.4 1.6 4.4 4.4 0 .5-.4 1-1 1Zm7.2 3.8h-.7c-2 0-3.1-.8-3.1-3.8v-3h-.7c-.6 0-1.1-.6-1.1-1.2 0-.7.5-1.2 1.1-1.2h.7V9.6c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3v2.3h1c.7 0 1.2.5 1.2 1.2 0 .6-.5 1.1-1.2 1.1h-1v2.6c0 1.7 0 2 .8 2h.4c.6 0 1.1.6 1.1 1.2s-.5 1.1-1.1 1.1Zm12.5-11.9c.3.2.6.7.6 1 0 .7-.6 1.3-1.2 1.3l-.5-.1c-.7-.6-1.7-1-2.7-1-2.3 0-4 2-4 4.3s1.7 4.2 4 4.2c1.2 0 2.3-.5 3-1.2.3-.2.5-.2.8-.2.6 0 1.1.5 1.1 1s-.2.8-.6 1a6.9 6.9 0 0 1-4.2 1.6c-3.7 0-6.6-2.9-6.6-6.5s3-6.5 6.6-6.5c1.3 0 2.6.4 3.7 1.1Zm6.5 9.7c1.2 0 2.1-1 2.1-2.4s-1-2.3-2.1-2.3-2 1-2 2.3c0 1.3.9 2.4 2 2.4Zm2.7 1.1v-.3c-.5 1-2.1 1.4-3.1 1.4-2.5 0-4.2-2.1-4.2-4.6 0-2.5 1.8-4.6 4.3-4.6a4 4 0 0 1 3 1.4V13c0-.5.5-1 1-1 .6 0 1 .5 1 1v7c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm9-1.1c1.2 0 2.1-1 2.1-2.4 0-1.3-.9-2.3-2-2.3-1.2 0-2.2 1-2.2 2.3 0 1.4 1 2.4 2.2 2.4Zm-2 1.5v3.2c0 .6-.7 1.2-1.4 1.2s-1.2-.6-1.2-1.2V13c0-.5.4-1 1-1 .5 0 1 .5 1 1.1.9-1 2-1.2 3-1.2 2.5 0 4.3 2 4.3 4.6 0 2.5-1.8 4.6-4.2 4.6-.7 0-1.9-.2-2.6-.7Z"></path>
            </svg>
        </div>
    )
}

export default Logo