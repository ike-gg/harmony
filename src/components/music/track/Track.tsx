const Track = () => {
  return (
    <li
      style={isCurrentlyPlaying ? activeSong : {}}
      onClick={playTrack}
      className={
        "first:border-t-0 flex gap-3 items-center border-t border-neutral-200 p-2 relative opacity-70 hover:bg-neutral-100 hover:cursor-pointer hover:opacity-100"
      }
    >
      <span className="opacity-50 min-w-[1.4rem] text-center">{++index}</span>
      <Artwork
        artworkUrl={artwork.url}
        size="icon"
        className="min-w-max"
        isTrack
      />
      <div className="flex flex-col">
        <span className="line-clamp-1 text-sm md:text-base">{name}</span>
        <span className="line-clamp-1 text-xs md:text-sm opacity-50">
          {`by ${artistName}`}
        </span>
      </div>
      <Link
        onClick={(e) => e.stopPropagation()}
        to={detailsPage}
        className="ml-auto p-2"
      >
        <Icon
          className="text-2xl opacity-20 h-full flex my-auto line-clamp-1 "
          iconName="info-circle"
        />
      </Link>
    </li>
  );
};
