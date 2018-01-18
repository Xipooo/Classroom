package com.example.music;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MusicLibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusicLibraryApplication.class, args);
		
		Connection con;
		
		try {
			con = DriverManager.getConnection("jdbc:sqlite:./chinook.db", "", "");
			
			Statement stmt = con.createStatement();
			
			ResultSet rs = stmt.executeQuery("SELECT * FROM Albums");
			
			int albumId;
			String albumTitle;
			int albumArtistId;
			
			while (rs.next()) {
				albumId = rs.getInt("AlbumId");
				albumTitle = rs.getString("Title");
				albumArtistId = rs.getInt("ArtistId");
				
				System.out.println("Album ID: '" + albumId + "', Title: '" + albumTitle + "', Artist: " + albumArtistId);
			}
		}
		catch (SQLException ex) {
			ex.printStackTrace();
		}
	}
}
