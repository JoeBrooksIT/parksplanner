using Microsoft.EntityFrameworkCore.Migrations;

namespace ParksPlanner.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ParkName",
                table: "Park",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Park",
                keyColumn: "Id",
                keyValue: 1,
                column: "ParkName",
                value: "Abraham Lincoln Birthplace National Historical Park");

            migrationBuilder.UpdateData(
                table: "Park",
                keyColumn: "Id",
                keyValue: 2,
                column: "ParkName",
                value: "Acadia National Park");

            migrationBuilder.UpdateData(
                table: "Park",
                keyColumn: "Id",
                keyValue: 3,
                column: "ParkName",
                value: "Adams National Historical Park");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParkName",
                table: "Park");
        }
    }
}
