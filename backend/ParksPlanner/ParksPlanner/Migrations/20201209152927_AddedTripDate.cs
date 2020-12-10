using Microsoft.EntityFrameworkCore.Migrations;

namespace ParksPlanner.Migrations
{
    public partial class AddedTripDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TripDate",
                table: "Park",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Park",
                keyColumn: "Id",
                keyValue: 1,
                column: "TripDate",
                value: "1/13/2021");

            migrationBuilder.UpdateData(
                table: "Park",
                keyColumn: "Id",
                keyValue: 2,
                column: "TripDate",
                value: "4/6/2021");

            migrationBuilder.UpdateData(
                table: "Park",
                keyColumn: "Id",
                keyValue: 3,
                column: "TripDate",
                value: "11/11/2021");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TripDate",
                table: "Park");
        }
    }
}
