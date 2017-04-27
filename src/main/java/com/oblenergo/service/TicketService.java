package com.oblenergo.service;

import java.util.List;

import com.oblenergo.model.Ticket;

public interface TicketService {

  List<Ticket> findAllTicket();

  void save(Ticket ticket);

  Ticket findById(int id);

  void delete(int id);

  List<Ticket> findTicketsByIdGame(int id);

}
