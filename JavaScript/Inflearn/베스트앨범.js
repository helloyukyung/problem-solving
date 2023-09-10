function solution(genres, plays) {
  let songs = genres.map((genre, index) => {
    return {
      no: index,
      genre: genre,
      playCount: plays[index],
    };
  });

  let genrePlayCount = [];
  songs.forEach((song) => {
    let thisGenre = genrePlayCount.find(
      (genrePlay) => genrePlay.genre === song.genre
    );
    if (!thisGenre) {
      genrePlayCount.push({
        genre: song.genre,
        totalPlayCount: song.playCount,
      });
    } else {
      thisGenre.totalPlayCount += song.playCount;
    }
  });

  genrePlayCount.sort((a, b) => b.totalPlayCount - a.totalPlayCount);

  let answer = [];
  genrePlayCount.forEach((genrePlay) => {
    let thisGenreSongs = songs.filter((song) => genrePlay.genre === song.genre);
    thisGenreSongs.sort((a, b) => b.playCount - a.playCount);
    answer.push(thisGenreSongs[0].no);
    if (thisGenreSongs.length > 1) {
      answer.push(thisGenreSongs[1].no);
    }
  });

  return answer;
}
