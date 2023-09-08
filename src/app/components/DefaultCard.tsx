import React from "react";

const DefaultCard = () => {
  return (
    <div className="w-96 border-2 border-green-500 flex flex-col gap-4">
      <div className="w-64 border-2 border-purple-400 flex gap-2 p-1 mx-auto">
        <div>
          <img
            className="w-16 h-16 rounded-full "
            src="/assets/hifumi.jpg"
            alt="avatar"
          />
        </div>
        <div>
          <h3>Takimoto Hifumi</h3>
          <a href="https://github.com/TakimotoHifumin" target="_blank">
            @TakimotoHifumin
          </a>
          <p>Joined 22 December 2015</p>
        </div>
      </div>
      <div className="w-60 border-red-500 mx-auto border-2">
        「まんがタイムきららキャラット」にて連載中の大人気4コマ『NEW
        GAME!』のTVアニメ公式ツイッターです
      </div>
      <div className="w-60 border-purple-500 border-2 mx-auto">
        <div className="flex gap-2 justify-center border-2 border-slate-600">
          <div className="border-2 border-pink-400 text-center">
            <h3>Repos</h3>
            <p>28</p>
          </div>
          <div className="border-2 border-pink-400 text-center">
            <h3>Followers</h3>
            <p>
              <a href="#" target="_blank">
                129k
              </a>
            </p>
          </div>
          <div className="border-2 border-pink-400 text-center">
            <h3>Following</h3>
            <p>
              <a href="#" target="_blank">
                24
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-700 w-60 mx-auto">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2">
            <img
              className="w-3.5 h-5"
              src="/assets/icon-location.svg"
              alt="location"
            />
            <p>Tokyo, Japan</p>
          </li>

          <li className="flex gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-website.svg"
              alt="website"
            />
            <a href="http://newgame-anime.com/" target="_blank">
              http://newgame-anime.com/
            </a>
          </li>
          <li className="flex gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-twitter.svg"
              alt="twitter"
            />
            <a href="https://twitter.com/nganime" target="_blank">
              @nganime
            </a>
          </li>
          <li className="flex gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-company.svg"
              alt="company"
            />
            <a
              href="https://new-game.fandom.com/wiki/Eagle_Jump"
              target="_blank"
            >
              Eagle Jump
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefaultCard;
