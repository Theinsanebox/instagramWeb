import './App.css';

function App() {

  function searchiconH() {
    document.querySelector('.nav-search-icon').style.display = "none";
    document.querySelector('.header-input-field').style.width = "190px";

  }

  function searchiconS() {
    document.querySelector('.nav-search-icon').style.display = "block";
  }

  return (
    <div className="App">
      {/* <script src="https://code.jquery.com/jquery-3.6.0.js"></script> */}
      <header>
        <div className="header-nothing-1"></div>
        <div className='header1'> <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" /> </div>

        <div className='header2'>
          <svg aria-label="Search" class="_8-yf5 nav-search-icon" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
          <input type="text" onFocus={searchiconH} onFocusout={searchiconS} placeholder="Search" className='header-input-field' />
        </div>
        <div className='header3'>

          <svg aria-label="Home" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>
          <svg aria-label="Messenger" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z" fill-rule="evenodd"></path></svg>
          <svg aria-label="New Post" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
          <svg aria-label="Find People" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
          <svg aria-label="Activity Feed" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
          <img src="https://storage.googleapis.com/ares-profile-pictures/default/tainnaofc-1cded8aa7ed22abc227f1c428072e1c2.jpg" className="header-profile-photo" />

        </div>
        <div className="header-nothing-2"></div>
      </header>


      <center className="center-two-component" >
        <div className="wrapper-stories-post">
          <div className="stories">

            <div className="container-story-id">
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTUlyTFN60JmTruT2Y-ZKIoD_2M6bUPX3N6G1ROcALY-pyI-Ifw&psig=AOvVaw1fbS7HK2OAErDyXG-RZrto&ust=1645176233070000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOir45u1hvYCFQAAAAAdAAAAABAD" className="story-profile" />
              <div className="story-id"> Dua Lipa </div>
            </div>

            <div className="container-story-id">
              <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F07%2Fselena-gomez-la-mariette-swimwear-collection-bikinis-one-piece-lookbook-release-0.jpg?w=960&cbr=1&q=90&fit=max" className="story-profile" />
              <div className="story-id"> Selena Gomez </div>
            </div>

          </div>
          <div className="posts-container">

            <div className="posts">

              <div className="header-of-post">
                <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F07%2Fselena-gomez-la-mariette-swimwear-collection-bikinis-one-piece-lookbook-release-0.jpg?w=960&cbr=1&q=90&fit=max" className="header-post-profile" />
                <div className="header-post-name"> Selena Gomez </div>
                <svg aria-label="More options" class="_8-yf5  post-options " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div>
              <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F07%2Fselena-gomez-la-mariette-swimwear-collection-bikinis-one-piece-lookbook-release-0.jpg?w=960&cbr=1&q=90&fit=max" className="actual-post" />
              <div className="post-operation">
                <svg aria-label="Like" class="_8-yf5  like-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                <svg aria-label="Comment" class="_8-yf5  comment-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                <svg aria-label="Share Post" class="_8-yf5  share-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                <svg aria-label="Save" class="_8-yf5  save-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              </div>
              <div className="likes-count"> 0 likes </div>

            </div>

            <div className="posts">

              <div className="header-of-post">
                <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F07%2Fselena-gomez-la-mariette-swimwear-collection-bikinis-one-piece-lookbook-release-0.jpg?w=960&cbr=1&q=90&fit=max" className="header-post-profile" />
                <div className="header-post-name"> Selena Gomez </div>
                <svg aria-label="More options" class="_8-yf5  post-options " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div>
              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elm050120fobcover0004a-1585330301.jpg" className="actual-post" />
              <div className="post-operation">
                <svg aria-label="Like" class="_8-yf5  like-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                <svg aria-label="Comment" class="_8-yf5  comment-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                <svg aria-label="Share Post" class="_8-yf5  share-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                <svg aria-label="Save" class="_8-yf5  save-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              </div>
              <div className="likes-count"> 0 likes </div>

            </div>

            <div className="posts">

              <div className="header-of-post">
                <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F07%2Fselena-gomez-la-mariette-swimwear-collection-bikinis-one-piece-lookbook-release-0.jpg?w=960&cbr=1&q=90&fit=max" className="header-post-profile" />
                <div className="header-post-name"> Selena Gomez </div>
                <svg aria-label="More options" class="_8-yf5  post-options " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div>
              <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F07%2F02%2Flamariette-x-Selena-Gomez3-2000.jpg" className="actual-post" />
              <div className="post-operation">
                <svg aria-label="Like" class="_8-yf5  like-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                <svg aria-label="Comment" class="_8-yf5  comment-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                <svg aria-label="Share Post" class="_8-yf5  share-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                <svg aria-label="Save" class="_8-yf5  save-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              </div>
              <div className="likes-count"> 0 likes </div>

            </div>


            <div className="posts">

              <div className="header-of-post">
                <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F07%2Fselena-gomez-la-mariette-swimwear-collection-bikinis-one-piece-lookbook-release-0.jpg?w=960&cbr=1&q=90&fit=max" className="header-post-profile" />
                <div className="header-post-name"> Selena Gomez </div>
                <svg aria-label="More options" class="_8-yf5  post-options " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div>
              <img src="https://www.geo.tv/assets/uploads/updates/2021-12-26/389896_5780816_updates.jpg" className="actual-post" />
              <div className="post-operation">
                <svg aria-label="Like" class="_8-yf5  like-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                <svg aria-label="Comment" class="_8-yf5  comment-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                <svg aria-label="Share Post" class="_8-yf5  share-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                <svg aria-label="Save" class="_8-yf5  save-post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              </div>
              <div className="likes-count"> 0 likes </div>

            </div>



          </div>
        </div>
        <div className="follow-suggestion">

          <div className="my-id-switch">
            <img src="https://storage.googleapis.com/ares-profile-pictures/default/tainnaofc-1cded8aa7ed22abc227f1c428072e1c2.jpg" className="switch-profile-image" />
            <div className="switch-id-name">Jainil Soni </div>
            <div className="switch-id">Switch</div>
          </div>

          <h5 className="suggestion-title">Suggestions For You</h5>

          <br />        <br />

          <div className="id-suggestion">
            <img src="https://storage.googleapis.com/ares-profile-pictures/default/tainnaofc-1cded8aa7ed22abc227f1c428072e1c2.jpg" className="suggestion-profile-image" />
            <div className="suggestion-id-name">Famous Celebrity</div>
            <div className="follow-suggestion-id">Follow</div>
          </div>

          <div className="id-suggestion">
            <img src="https://storage.googleapis.com/ares-profile-pictures/default/tainnaofc-1cded8aa7ed22abc227f1c428072e1c2.jpg" className="suggestion-profile-image" />
            <div className="suggestion-id-name">Famous Celebrity</div>
            <div className="follow-suggestion-id">Follow</div>
          </div>

          <div className="id-suggestion">
            <img src="https://storage.googleapis.com/ares-profile-pictures/default/tainnaofc-1cded8aa7ed22abc227f1c428072e1c2.jpg" className="suggestion-profile-image" />
            <div className="suggestion-id-name">Famous Celebrity</div>
            <div className="follow-suggestion-id">Follow</div>
          </div>



        </div>
      </center>

    </div>
  );

}



export default App;
