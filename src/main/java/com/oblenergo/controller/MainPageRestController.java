package com.oblenergo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.oblenergo.model.Game;
import com.oblenergo.model.Season;
import com.oblenergo.model.Sector;
import com.oblenergo.model.Ticket;
import com.oblenergo.service.GameService;
import com.oblenergo.service.SeasonService;
import com.oblenergo.service.SectorService;
import com.oblenergo.service.TicketService;

@RestController
@RequestMapping(value = "/main")
public class MainPageRestController {

  @Autowired
  private SectorService serviceSector;

  @Autowired
  private TicketService serviceTicket;

  @Autowired
  private GameService serviceGame;

  @Autowired
  private SeasonService serviceSeason;

  @GetMapping
  public ResponseEntity<List<Sector>> getAllSeats() {

    List<Sector> sectors = serviceSector.findAllSector();
    if (sectors.isEmpty()) {
      return new ResponseEntity<List<Sector>>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<List<Sector>>(sectors, HttpStatus.OK);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public void ticketSave(@RequestBody Ticket ticket) {

    serviceTicket.save(ticket);
  }

  @GetMapping("/games")
  public ResponseEntity<List<Game>> getAllGames() {

    List<Game> games = serviceGame.findAllGames();
    if (games.isEmpty()) {
      return new ResponseEntity<List<Game>>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<List<Game>>(games, HttpStatus.OK);
  }

  @GetMapping("/season/{id}")
  public ResponseEntity<Season> getAllSeasons(@PathVariable int id) {

    Season season = serviceSeason.findById(id);
    if (season == null) {
      return new ResponseEntity<Season>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<Season>(season, HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void ticketSave(@PathVariable int id) {

    serviceTicket.delete(id);
  }

}
