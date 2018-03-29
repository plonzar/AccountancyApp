using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace AccountancyApi.Migrations
{
    public partial class EmailServices2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "EmailsConfigurations",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EmailsConfigurations_UserId",
                table: "EmailsConfigurations",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_EmailsConfigurations_AspNetUsers_UserId",
                table: "EmailsConfigurations",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmailsConfigurations_AspNetUsers_UserId",
                table: "EmailsConfigurations");

            migrationBuilder.DropIndex(
                name: "IX_EmailsConfigurations_UserId",
                table: "EmailsConfigurations");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "EmailsConfigurations");
        }
    }
}
